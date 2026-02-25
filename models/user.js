const mongoose=require('mongoose');
const { validate } = require('./url');

const userSchema=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
       validate:{
        validator:function(v){
            return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(v);
        },
        message:"Password must be at least 8 characters long and contain both letters and numbers."
       }

    }
},{timestams:true})

const User=mongoose.model('user',userSchema);
module.exports=User;
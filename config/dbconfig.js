const mongoose=require('mongoose');

async function connectMongoDb(url){
    try {
        await mongoose.connect(url);
        console.log('MOngo db connected successfully');
       
    } catch (error) {
        console.log('error while connecting mongo db')
       
    }
}

module.exports={
    connectMongoDb
}
require('dotenv').config();
const staticRoute=require('./routes/staticRoutes');
 
const express=require('express');
const app=express();
const {connectMongoDb}=require('./config/dbconfig');
const URL=require('./models/url');
const { handleRedirectRequest } = require('./controller/url');
const cookieParser = require('cookie-parser');
const {restictToLoggedinUserOnly}=require("./middleware/auth")

const urlRoute=require('./routes/url');
const userRoute=require('./routes/user')


connectMongoDb(process.env.MONGO_URL);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

app.use('/url',restictToLoggedinUserOnly, urlRoute);
app.use("/user",userRoute);
app.use('/',staticRoute);

app.set("view engine","ejs");
app.set("views","./views");






module.exports=app;
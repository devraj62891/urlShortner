require('dotenv').config();
const staticRoute=require('./routes/staticRoutes');
 
const express=require('express');
const app=express();
const urlRoute=require('./routes/url');
const {connectMongoDb}=require('./config/dbconfig');
const URL=require('./models/url');
const { handleRedirectRequest } = require('./controller/url');

connectMongoDb(process.env.MONGO_URL);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/url',urlRoute);
app.use('/',staticRoute)

app.set("view engine","ejs");
app.set("views","./views");






module.exports=app;
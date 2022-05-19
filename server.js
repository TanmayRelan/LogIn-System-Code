const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4:uuidv4}=require("uuid");
const app = express();
const port = process.env.PORT||3000;
const router = require('./router');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extende:true}))

app.set('view engine','ejs');

//load static asset
app.use('/static',express.static(path.join(__dirname,'public')))
app.use(session({
  secret:uuidv4(),
  resave:false,
  saveUnintialized:true
}));

app.use('/route',router);




//homeroute
app.get('/',(req,res)=>{
  res.render('base',{title : "Login System"});

});

app.listen(port,()=>{console.log("listening to the server")});

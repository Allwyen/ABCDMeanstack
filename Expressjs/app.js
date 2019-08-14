const Express = require("express");

var app = new Express();

app.get('/',(req,res)=>{
    res.send("Welcome to my Express Website");
});

/*
    '/' is my primary route which means through '/' "welcome to my website" is accessed and we need
    request and response model hence (req,res).
*/

app.get('/home',(req,res)=>{
    res.send("Welcome to my Home page");
});

app.listen(3369);  //web can assign any number.3000 is commonly used.
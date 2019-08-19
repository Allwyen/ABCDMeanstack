const Express = require("express");

var bodyParser = require('body-parser');

var app = new Express();

app.set('view engine','ejs'); //to use template engine in express. we can also use here react,handlebars etc

/*
    '/' is my primary route which means through '/' "welcome to my website" is accessed and we need
    request and response model hence (req,res).
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index',{'title':'ICTAK'});
});

/* 
    app.get('/home',(req,res)=>{
        res.send("Welcome to my ICTAK Home");
    }); 
*/ 

app.get('/home',(req,res)=>{
    res.render('home',{'title':'ICTAK:Home','names':["Allwyen","Amal","Joel","Romy"]});
});

app.get('/bootstraphome',(req,res)=>{
    res.render('bootstraphome',{'names':["Allwyen","Amal","Romy","Joel"]});
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.post('/read',(req,res)=>{
    var items=req.body;
    //res.send(req.body);
    res.render('read',{item:items});

});

app.listen(process.env.PORT || 3369,()=>{
    console.log("Server running on port::3369...");
});  //we can assign any number.3000 is commonly used.
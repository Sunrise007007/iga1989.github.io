const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));

app.get('/addCookie',function(req,res){
    res.render('form',{cookies: req.cookies});
});

app.post('/addCookie',function(req,res){
    const{key, value} = req.body;
    res.cookie(`${key}`,value);
    res.redirect(303,'/addCookie');
});

app.get('/login',function(req,res){
    for(item in req.cookies){
        res.clearCookie(item);
    }
    res.redirect(303,'/addCookie');
});

app.listen(3000);
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));
app.set('/css', express.static(path.join(__dirname, 'css')));

app.get('/',function(req,res){
    const date = new Date();
    const hour = date.getHours();
    const cssFile = (hour >= 6 && hour <= 18) ? 'day.css' : 'night.css';
    res.render('form', {time: date.toTimeString(),cssFile});
});

app.post('/result',function(req,res){
    res.render('result',{name: req.body.name, age: req.body.age});
});
app.listen(3000,function(){
    console.log("Server is up and running.....");
});
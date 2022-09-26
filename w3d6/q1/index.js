const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'view'));
app.set('/css', express.static(path.join(__dirname,'css')));

app.get('/',(req,res)=>{
    const date = new Date();
    const hour = date.getHours();
    const cssFile = (hour >= 6 && hour <= 18) ? 'day.css' : 'night.css';
    res.render('index', {time: date.toTimeString(),cssFile});
});

app.listen(3000, function(){
    console.log("Server is running..............");
});
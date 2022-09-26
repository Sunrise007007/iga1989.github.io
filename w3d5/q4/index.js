const express = require('express');
const app = express();
const path = require('path');

const date = new Date();
const hour = date.getHours();

app.use(express.json());
app.use(express.urlencoded());

app.use('/css', express.static(path.join(__dirname,'css')));
const cssFile = (hour >= 6 && hour <= 18) ? 'day.css' : 'night.css';

app.get('/',function(req,res){
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="/css/${cssFile}">
                <title>Form</title>
            </head>
            <body>
                <form action="/result" method="post">
                    <label for="name">Name</label>
                    <input id="name" type="text" name="name"/>
                    <label for="age">Age</label>
                    <input id="age" type="text" name="age"/>
                    <input type="submit" value="Submit Query"/>
                </form>
            </body>
        </html>`
    );
});

app.get('/output',function(req,res){
    res.send(`Welcome ${req.query.name}, Age${req.query.name}`);
});

app.post('/result',function(req,res){
    res.redirect(303, '/output');
});

app.listen(3000,function(){
    console.log("Server is up and running.....");
});
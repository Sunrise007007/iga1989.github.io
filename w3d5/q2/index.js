const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/',function(req,res){
    res.send(
        `<form action="/result" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name"/>
            <label for="age">Age</label>
            <input type="text" id="age" name="age"/>
            <input type="submit" value="Submit Query"/>
        </form>`
    );
});

app.post('/result',function(req,res){
    res.send(`Welcome ${req.body.name}, Age ${req.body.age}`);
});

app.listen(3000,function(){
    console.log("Server is up and running.....");
});
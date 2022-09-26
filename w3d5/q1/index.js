const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name = "Iga";
        age = 33;
    }
    res.send(`Welcome ${name}, Age ${age}`);
});

app.listen(3000,function(){
    console.log("This is a new Server......");
});
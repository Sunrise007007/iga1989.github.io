const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/*readline.question('What is your name?', name=>{
    console.log(`Welcome ${name}`);
    readline.question('What is your age?', age=>{
        if(age < 16){console.log("You are not allowed to drive in Iowa!");}
        else{console.log("You are allowed to in Iowa");}
        readline.close();
    });
});*/

/*function sumOfNumbers(){
    let sum = 0;
    const getNumber = function(){
        readline.question('Enter a number, or "stop" to exit: ',reply=>{
            if(reply.toLowerCase() === 'stop'){
                console.log(`SUM: ${sum}`);
                readline.close();
            }else{
                sum += parseInt(reply);
                getNumber();
            }
        })
    }
    getNumber();
}
sumOfNumbers();*/

function algebra() {
    const math = require('./my_math');
    console.log("3 + 5 = ", math.add(3, 5));
    console.log("3 - 5 = ", math.subtract(3, 5));
    console.log("3 * 5 = ", math.multiply(3, 5));
    console.log("3 / 5 = ", math.divide(3, 5));
    console.log("PI = ", math.pi);
}
algebra();

function automobile() {
    const myCar = require('./my_car');
    myCar.drive();
    myCar.turn(50);
    myCar.turn(60);
    myCar.turn(90);
    myCar.break();
}

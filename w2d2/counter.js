const count = (function () {
    let counter = 0;
    function changeBy(val) {
      counter += val;
    }
  
    return {
      add() {
        changeBy(1);
      },
  
      reset() {
        changeBy(-1);
      },
  
      value() {
        return counter;
      },
    };
  })();
  
  console.log(count.value()); // 0.
  count.add();
  count.add();
  console.log(count.value()); // 2.
  count.reset();
  console.log(count.value()); // 1.


var add = (function(){
    var counter = 0;
    return function(){
        return counter += 1;
    }
})();
add();
console.log(add());

var make_adder = function (inc) {
    var counter = 0;
    return function() {
        return counter += inc;
    };
};
var add5 = make_adder(5);
add5(); add5(); console.log(add5());

var add7 = make_adder(7);
add7(); add7(); console.log(add7());

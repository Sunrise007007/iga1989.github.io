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
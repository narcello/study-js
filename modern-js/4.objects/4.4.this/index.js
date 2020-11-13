/* 
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

r: Error
*/

/* 

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/

let calculator = {
  firstValue: 0,
  secondValue: 0,

  read() {
    this.firstValue = +prompt('First value', 0);
    this.secondValue = +prompt('Second value', 0);
  },

  sum() {
    return this.firstValue + this.secondValue;
  },

  mul() {
    return this.firstValue * this.secondValue;
  },
};

calculator.read()
alert( calculator.sum() );
alert( calculator.mul() );


/* 
There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep(); 
*/


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();
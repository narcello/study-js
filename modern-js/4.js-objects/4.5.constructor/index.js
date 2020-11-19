/* 
Two functions – one object
importance: 2
Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
If it is, then provide an example of their code.

R: false, dois objetos só são iguais se forem o mesmo objeto.
Com o constructor é sempre um objeto novo
*/

/* 
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
  this.a = 0;
  this.b = 0;
  this.read = function() {
    this.a = +prompt('a?', this.a);
    this.b = +prompt('b?', this.b);
  }

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/* 
Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);
*/

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let newValue = +prompt('New value', 0);
    this.value += newValue;
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);
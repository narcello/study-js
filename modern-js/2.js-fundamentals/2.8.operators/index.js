/* 
What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
*/
a = 2;
b = 2;
c = 2;
d = 1;

/* 
What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);
*/

a = 4;
x = 5;

/* 
What are results of these expressions?

"" + 1 + 0 
r: "10"

"" - 1 + 0
r: -1

true + false
r: 1

6 / "3"
r: 2

"2" * "3"
r: 6

4 + 5 + "px"
r: "9px"

"$" + 4 + 5
r: "$45"

"4" - 2
r: 2

"4px" - 2
r: NaN

7 / 0
r: Infinty

"  -9  " + 5
r: "  -9  5"

"  -9  " - 5
r: -14

null + 1
r: 1

undefined + 1
r: NaN

" \t \n" - 2
r: -2

*/

/* 
Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12
 */
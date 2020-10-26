/* 
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?
R: não

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?
r: não têm
*/

/* 
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||

function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?');
}

*/

/* 
Write a function min(a,b) which returns the least of two numbers a and b.
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

functions min(a, b){
  return a < b ? a : b;
}
*/

/* 
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n){  
  let result = x;
  while(n>1){
     result *= x
     --n;
  }
  return result;
}
pow(2, 3)
*/

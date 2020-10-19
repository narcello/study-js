/* 
What is the code below going to output?

alert( null || 2 || undefined );
r: 2
*/

/* 
What will the code below output?

alert( alert(1) || 2 || alert(3) );
r: First runs the inside alert(1) then alert evaluate undefined, the outside show's 2 and finish.
*/

/* 
What is this code going to show?

alert( 1 && null && 2 );
r: null
*/

/* 
What will this code show?

alert( alert(1) && alert(2) );
r: First runs the inside alert(2) then alert evaluate undefined and immediately stops
*/

/* 
What will the result be?

alert( null || 2 && 3 || 4 );
r: 3
*/

/* 
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
if(age >= 14 && age <= 90)
*/

/* 
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
1. if(!(age>=14 && age<=90))
2. if(age<14 || age>90)
*/

/* 
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
r: executed
if (-1 && 0) alert( 'second' );
r: not executed
if (null || -1 && 1) alert( 'third' );
r: executed
*/

/* 
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

const username = prompt("Who's there?"", '');
if(username == null || username == '')
  alert('Canceled');
else if(username != 'Admin')
  alert("I don't know you");
else {
  const password = prompt("Password", "");
  if(password == null || password == '') 
    alert('Canceled');
  else if(password != 'TheMaster') 
    alert('Wrong password')
  else 
    alert('Welcome!')
}
*/
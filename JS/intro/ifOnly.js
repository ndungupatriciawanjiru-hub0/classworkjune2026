/*
 * Let's start with if.
 * You can use it on its own.
 */

// If is independent.
// One statement does not depend on another.

 /*let age = prompt("Enter your age:");

alert(`You entered ${age}`);

if (age > 10) {
    alert('You are a baby.');
}

if (age > 13) {
    alert('You are a teen');
}

if (age > 18) {
    alert("You can legally drink and smoke");
}

if (age > 27) {
    alert("Best age for marriage");
}

if (age > 45) {
    alert("Best age for retirement");
}

if (age > 50) {
    alert("You are an ancestor");
}
*/




/*
Work on this bit ->
Using if statements only to ensure we get only one alert for age.
Must be the correct one.
*/

// We use separate if statements with range checks (using &&)
// so that only ONE condition can ever be true at a time.


let age = prompt("Enter your age:");

// Age 10 and below - young child
if (age <= 10) {
  alert("You are a baby.");
}

// Between 11 and 13 - baby range
if (age > 10 && age <= 13) {
  alert("You are a baby.");
}

// Between 14 and 18 - teen range
if (age > 13 && age <= 18) {
  alert("You are a teen");
}

// Between 19 and 27 - young adult range
if (age > 18 && age <= 27) {
  alert("You can legally drink and smoke");
}

// Between 28 and 45 - adult range
if (age > 27 && age <= 45) {
  alert("Best age for marriage");
}

// Between 46 and 50 - middle age range
if (age > 45 && age <= 50) {
  alert("Best age for retirement");
}

// Above 50 - senior range
if (age > 50) {
  alert("You are an ancestor");
}
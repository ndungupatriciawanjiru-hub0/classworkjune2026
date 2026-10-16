/*
 * if and else if -> chain
 * We exit the if/else if chain when we reach the first true condition.
 */

// Gets user age

let age = prompt("Enter your age:");

// For debugging
console.log(`Age is ${age}, type is ${typeof age}`);
alert(`You entered ${age}`);

// Age classification using if...else if chain
if (age > 10) {
    alert("You are a baby.");
} 
else if (age > 13) {
    alert("You are a teen");
} 
else if (age > 18) {
    alert("You can legally drink and smoke");
} 
else if (age > 27) {
    alert("Best age for marriage");
} 
else if (age > 45) {
    alert("Best age for retirement");
} 
else if (age > 50) {
    alert("You are an ancestor");
}
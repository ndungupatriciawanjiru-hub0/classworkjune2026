/*
  1.Named function:
  2.Anonymous Function:<without a name>
    -> a function can be assigned to variable.
    ->a variable can reference a function
*/

function areCircle(r) {
  return 3.142 * r * r; //area of a function
} //named function

//
let age = 23;

let samsAge = age; //age=23

let ac = areCircle;

/*
  what is the value of ac and what is
  it.
  ->hint <use typeof>
*/

// Answer:
console.log(ac);         // prints the areCircle function
console.log(typeof ac);  // prints "function"



// Function Practice :Named vs Anonymous Functions//

// Step 1: my function that greets someone//
function greetPatricia(name) {
  return "Hello " + name;
}

// Step 2: i put the function inside a variable//
let greet = greetPatricia;

// Step 3: calling the variable works just like calling the function//
console.log(greet("Patricia")); //  prints Hello Patricia

// Step 4:  i removed the original function below (commented out)
// function greetPatricia(name) {
//   return "Hello " + name;
// }

// Step 5: testing what still works after removing the original//
console.log(greet("Patricia"));       // works! prints "Hello Patricia"
// console.log(greetPatricia("Patricia")); // this would break, function is gone

// Observation:  the variable greet still remembered the function even after i deleted it
// original function is removed, because it holds a reference to it

// Step 6: the function name is useless now so i removed it
// Step 7: this is called an anonymous function, it has no name
let greetAnonymous = function(name) {
  return "Hello " + name;
};

console.log(greetAnonymous("Patricia")); // prints "Hello Patricia"
console.log(typeof greetAnonymous);      // prints "function"
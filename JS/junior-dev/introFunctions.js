/*
  -Functions let you store reusable chunks of code.
  -They follow the DRY principle (Don't Repeat Yourself)
  by wrapping logic inside a code block.

  /{code block}/
  Structure:
  function <functionName> (<params>) {
    // your code goes here
  }

  Key things to remember:
  -> A function won't run until you call it.
  -> Calling a function means you're triggering
     it to start executing.
*/

//example//

/*
  Build a basic function that,
  whenever it's called, pops up
  an alert showing the current time.
*/

/*
  To run a function, write its name
  followed by () the parentheses
  are what actually trigger it.
*/

function showCurrentTime() {
  const now = new Date();
  alert(`Current time: ${now.toISOString()}`);
}

showCurrentTime(); // invoking the function//

// Triangle Area Function

function areaOfTriangle(base, height) {
    console.log(`base, height is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    
    const area = 0.5 * base * height;
    
    console.log(
        `For triangle with base ${base} and height ${height} area is ${area}`
    );
    
    return area; // Good practice to return the value
}


//  Scenario 1: no arguments passed in 
// base and height will both be undefined
areaOfTriangle();

// Scenario 2: only base is passed in 
// height will be undefined, so area will be NaN (not a number)
areaOfTriangle(20);

// Scenario 3: both base and height passed in 

areaOfTriangle(20, 30);

//  Scenario 4: passing variables instead of raw numbers 
const base1 = 50;   
const height1 = 60; 
areaOfTriangle(base1, height1); 

//  Scenario 5: passing wrong data types 
const base2 = "hello"; // a string, not a number
const height2 = true;  // a boolean, not a number
// result will be NaN because you can't multiply a word by a boolean
areaOfTriangle(base2, height2);


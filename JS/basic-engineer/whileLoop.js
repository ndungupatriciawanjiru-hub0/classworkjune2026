/*The while loop loops through a block of code as long as a specified condition is true.
Loops are handy, if you want to run the same code over and over again, each time with a different value.

JavaScript have two types of while loops:

-The while loop
-The do while loop

Syntax;
while (condition) {
  // code block to be executed
}*/

/*The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
do {
  // code block to be executed
}
while (condition); */

/* Initialize a counter variable, starting at 0
let n = 0;

// This variable controls whether the loop keeps running
let condition = true;

// condition => falsey: we automatically exit the loop
while (condition) {
  console.log("n is", n); // print the current value of n

  n = n + 1; // increment n by 1 each time the loop runs

  if (n > 200) {
    // once n passes 200, we've counted far enough
    condition = false; // flipping this to false will stop the while loop
  }
}*/

/*If you forget to increase the variable used in the condition, the loop will never end.

This will crash your browser.*/


/*
Create a function (any name)
The function should take a parameter and the parameter should be greater than 0
Have a loop inside that counts down from this number
Use while loop. It should print n
*/

/*function countDown(n) {          // Create a function called countDown, takes n as a parameter
  while (n > 0) {                // Keep looping as long as n is greater than 0
    console.log(n);              // Print the current value of n
    n = n - 1;                   // Decrease n by 1 so the loop eventually stops
  }
  // Loop has ended here, n is now 0 (or less), so nothing more gets printed
}

countDown(250);                   // Call the function, starting the countdown from 250*/


//Assignment//

/*Create a function @function1 (give it any name).
It does not take any parameters.
This function should:

Prompt a user for the first number
Check if number is a valid number greater than 1.
Prompt a user for the second number
Check if number is a valid number greater than 1.
Use recursion or a while loop to ensure user enters a correct number for number1 and number2.
After the numbers are entered, call @function2 which takes the numbers as parameters.
Example: @function2(number1, number2)

function promptStudent() {
  let num1 = null;
  let num2 = null;
  while (true) {
    num1 = prompt("Enter the first number");
    if (isNaN(num1)) {
      continue; // restart the loop
    }
    num2 = prompt("Enter the second number");
    if (isNaN(num2)) {
      continue; // restart the loop from beginning
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 <= 0 || num2 <= 0) {
      continue; //
    }
    break;
  }
  console.log("Got valid number", num1, num2);
  mathTable(num1, num2);
}



Create a function @function2 (give it any name).
This function takes in the following parameters:

@param1 number greater than 1.
@param2 number greater than 1.
Check if @param1 is a number greater than 1.
Check if @param2 is a number greater than 1.
Example: function2(3,5)
Create a maths table for it. Up to console logs.*/

//function mathTable(num1, num2) {
  //if (!num1 || num1 < 0 || !num2 || num2 < 0) {
   // console.error("Ensure number1 or number2 are numbers greater than 0");
    //return;
  //}

  //let outerLoop = num1; //2

  //while (outerLoop > 0) {
    //doInnerLoop(outerLoop, num2); //
    //outerLoop = outerLoop - 1;
  //}
   //while (outerLoop > 0) {
     //let innerLoop = num2; //3 //3
     //while (innerLoop > 0) {
     //console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
      //console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
      //innerLoop = innerLoop - 1;
   // }
   // outerLoop = outerLoop - 1;
   //}
//}


//For Loops can execute a block of code a number of times.

//For Loops are fundamental for tasks like performing an action multiple times.

//The for statement creates a loop with 3 optional expressions:

//for (exp 1; exp 2; exp 3) {
  // code block to be executed
//}

//exp 1 is executed (one time) before the execution of the code block.

//exp 2 defines the condition for executing the code block.

//exp 3 is executed (every time) after the code block has been executed.

//exercise//

/*
Kindergarten teacher wants to generate a maths table
for the student. This table is dynamic
use for loop
*/

/*function promptStudent() {
  let num1 = null;
  let num2 = null;
  for (;;) {  // same as while(true)
    num1 = prompt("Enter the first number");
    if (isNaN(num1)) {
      continue; // restart the loop
    }
    num2 = prompt("Enter the second number");
    if (isNaN(num2)) {
      continue; // restart the loop from beginning
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 <= 0 || num2 <= 0) {
      continue; //
    }
    break;
  }
  console.log("Got valid number", num1, num2);
  mathTable(num1, num2);
}*/

/*function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 or number2 are numbers greater than 0");
    return;
  }
  for (let i = num1; num1 >= 0; i--) {
    for (let j = num2; num2 >= 0; j--) {
      console.log(`outerLoop=${i} innerLoop=${j}`);
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}  */



// use this while loop to make a for loop

let k = 0;  // starting point

// condition: k < 20
while (k < 20) {
  console.log("k", k);
  k = k + 1;  // after each iteration
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k", k);
}

//The break statement//
//The break statement "jumps out" of loops and switches.

//The break statement terminates the execution of a loop or a switch statement.

//The Continue Statement//
//The continue statement skips the current iteration in a loop.

//The remaining code in the iteration is skipped and processing moves to the next iteration.//

/*break and continue are the only JavaScript statements that can "jump out of" a code block.*/

//Control Flow is the order in which statements are executed in a program.//
// By default, code runs from top to bottom.
// Conditions (if, else, switch) make decisions.
// Loops (for, while, do...while) repeat code.
// Jump statements (break, continue, return, throw) change the flow of execution.
// Functions run only when they are called.
//JavaScript is single-threaded, meaning it executes one task at a time.
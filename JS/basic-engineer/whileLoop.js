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

// Initialize a counter variable, starting at 0
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
}

/*If you forget to increase the variable used in the condition, the loop will never end.

This will crash your browser.*/
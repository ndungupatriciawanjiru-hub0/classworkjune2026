/*
  A recursive function is a function that calls itself.
   -it creates an endless loop, you need to find a way
  to terminate. 
 - This is achieved by using a return statement and if <condition>
*/

/*function salaryGrossPromptProcess() {
  // asking the user to type in their gross salary//
  let gross = prompt("Enter your gross salary");

  // isNaN means "is Not a Number"//
  // if isNaN is false, that means it IS a number//
  // so the condition is met and we can continue//
  if (isNaN(gross) === false) {
    // condition is met, the user entered a valid number//
    console.log(`You entered this amount ${gross} exiting`);
    // return stops the function from running any further//
    // this is how we break out of the recursive loop//
    return; // exit  function//
  }

  // if we get here it means the user typed something wrong//
  // so we tell them to try again//
  alert(
    `Invalid gross salary entered. enter a number for gross salary.try again`,
  );

  // this is the recursive part//
  // the function calls itself again to ask the user again//
  // it will keep doing this until a valid number is entered//
  salaryGrossPromptProcess();
}

// first call to start the whole process//
salaryGrossPromptProcess(); */



/*
  1. remove the alert=>
  2. initial prompt should be enter your gross salary
  3. any prompt after that should be 
    `Invalid gross salary entered. enter a number for gross salary.try again`
*/
 /*function salaryGrossPromptProcess(attempt = 0) {
  // start with null so we can fill it below//
  let gross = null;

  // first time running //
  if (attempt == 0) {
    gross = prompt("Enter your gross salary");
  } else {
    // any time after the first , show error message with attempt number//
    gross = prompt(
      `${attempt + 1} Invalid gross salary entered. enter a number for gross salary.try again.`
    );
  }

  // if the user entered a valid number we stop here//
  if (isNaN(gross) === false) {
    // condition is met
    console.log(`You entered this amount ${gross} exiting`);
    return; // exit a function
  }

  // still wrong so call itself again and add 1 to attempt//
  salaryGrossPromptProcess(attempt + 1);
}

// starting the process//
salaryGrossPromptProcess();

/*
  Create a function to calculate the factorial of a number.
  -The function takes a parameter
  -@param1 which is a number and returns the factorial of the number
  example. factorial(5) output 120
  // 5*4*3*2*1
  // check the number entered is greater 1
  //hint use a recursive function
*/

function getFactorial(num) {
  // If no number was passed in, ask the user for one
  if (num === undefined) {
    num = prompt("Please enter a number to find its factorial:");
  }

  // Guard clause: if what we got isn't a valid number, warn and retry
  if (isNaN(num)) {
    alert("That's not a valid number. Please try again.");
    return getFactorial();
  }

  // Make sure we're working with a proper number, not a string
  num = Number(num);

  // Base case: stops the recursion so we don't run forever
  // 0! and 1! are both defined as 1
  if (num <= 1) {
    return 1;
  }

  // Recursive case: multiply num by the factorial of everything below it
  let factorialOfRest = getFactorial(num - 1);
  let total = num * factorialOfRest;

  console.log(`${num}! = ${num} * ${factorialOfRest} = ${total}`);

  return total;
}

console.log(`Final answer: ${getFactorial()}`);

/*

    Example of what NOT to do (no exit condition):

    function infiniteCounter(count = 0) {
        console.log(`Count is now ${count}`);
        infiniteCounter(count + 1); // never stops it  will crash eventually
    }
*/

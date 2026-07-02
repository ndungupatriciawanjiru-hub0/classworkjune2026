/*
  -> Task
  create a function that prints an alert for the current time.
  -does not take any parameters
  -prints alert,console.log-> current times stamp
  -test your function by calling it.
*/



// i made a function that shows the current time
function showTime() {
  // new Date() grabs the current time from my computer
  const currentTime = new Date();

  // this pops up an alert in the browser with the time
  alert(currentTime);

  // also printing it in the console to see it there too
  console.log(`Current time is: ${currentTime}`);
}

// calling the function to test it
showTime();

/*
  1.Named function
  2.Anonymous Function:<remove the named function>
  3.Arrow function<>
  ->pass all function by reference<statement>
  -> if you use an expression you wrong
*/

// 1. named function stored in a variable , passing by reference//
let myTime = showTime;
setInterval(myTime, 10 * 1000); // runs every 10 seconds//

// 2. anonymous function , same thing but no name//
let myTime2 = function() {
  const currentTime = new Date();
  alert(`current time is: ${currentTime}`);
  console.log(`current time is: ${currentTime}`);
};
setInterval(myTime2, 10 * 1000); // runs every 10 seconds//

// 3. arrow function , shortest way to write it//
let myTime3 = () => {
  const currentTime = new Date();
  alert(`current time is: ${currentTime}`);
  console.log(`current time is: ${currentTime}`);
};
setInterval(myTime3, 10 * 1000); // runs every 10 seconds//
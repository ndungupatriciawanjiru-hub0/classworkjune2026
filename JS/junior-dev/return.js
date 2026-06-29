
function sayMyName() {
    let first_name = "Samson";                    // Statement 1
    console.log(`First Name ${first_name}`);      // Statement 2

    let second_name = "Johnna";                   // Statement 3
    console.log(`Second Name ${second_name}`);    // Statement 4

    let full_name = `${first_name} ${second_name}`; // Statement 5
    console.log(`Names are ${full_name}`);        // Statement 6
}

// Calling the function
let sayMyNameValue = sayMyName();

console.log(
    `Function returned ${sayMyNameValue} its type  ${typeof sayMyNameValue}`);


//scenario 1//
//Leave the code as it is and look at the results// 
// the function runs all 6 statements but returns undefined//
// sayMyNameValue will be undefined because nothing is returned//

function sayMyName1() {
  let first_name = "Samson";                            
  console.log(`First Name ${first_name}`);              
  let second_name = "Johnna";                           
  console.log(`Second Name ${second_name}`);            
  let full_name = `${first_name} ${second_name}`;       
  console.log(`Names are ${full_name}`);                
}

let value1 = sayMyName1();
console.log(`Function returned ${value1}`); // prints: undefined



//scenario 2//
//after the second statement inside the function put a return//
// function stops at statement 2, statements 3-6 never run//

function sayMyName2() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  return; // exits here, everything below is ignored//
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let value2 = sayMyName2();
console.log(`Function returned ${value2}`); // prints: undefined


//scenario 3//
//after the 4th statement inside the function put a return//
// function stops at statement 4, statements 5-6 never run//

function sayMyName3() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  return; // exits here 
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let value3 = sayMyName3();
console.log(`Function returned ${value3}`); // prints: undefined

//scenario 4//
//put a return statement anywhere inside your function and return a string of your choice//
// function returns a string value //

function sayMyName4() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  return "I am Samson Johnna"; // returns a string
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let value4 = sayMyName4();
console.log(`Function returned ${value4}`); // prints: I am Samson Johnna



//scenario 5 //
//put a return statement anywhere inside your function and return a number of your choice//
// function returns a number value //

function sayMyName5() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  return 42; // returns a number
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let value5 = sayMyName5();
console.log(`Function returned ${value5}`); // prints: 42

//scenario 6//
//put a return statement anywhere inside your function and return a boolean of your choice//
// function returns true or false //

function sayMyName6() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  return true; // returns a boolean
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let value6 = sayMyName6();
console.log(`Function returned ${value6}`); // prints: true



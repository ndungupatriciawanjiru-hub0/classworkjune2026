/*procedure.

 1.declare variable name in the global scope.
 2. create function call sayMyName
    console.log("the name and line number")
    -remember to call the function
 3.declare variable name inside the function.
  at the start
    assign it a different name. print our the name
    and line number
 4. create an if statement:inside the function  pass a truthy
   condition of your choice.
   inside the block console.log name
   and its line number
 5.inside the first if statement at the start
  declare variable name give it a new name.
 console.log name and line number.
 6.inside the function after the if block
  console.log name and line number.
 7.Try declaring the same variable name
  in the same scope
*/

   
   let name = "Samson";//Global variable//

function sayMyName() { //Function//
  let name = "Maggy";  // New variable at the start of the function//
  console.log(`name: ${name} line: 29`);//"Maggy" is printed because the local variable hides the global one//

  if (true) {
    let name = "Delilah";
    console.log(`name: ${name} line: 33`);//"Delilah" is printed because it shadows "Maggy" inside this block//
  }

  console.log(`name: ${name} line: 36`);//   "Maggy" is printed. "Delilah" is gone because it only existed inside the if block//
}

sayMyName();

// Step 7
let test = "mary";//JavaScript does not allow declaring the same variable
let test = "joseph"; // SyntaxError: Identifier 'test' has already been declared
   
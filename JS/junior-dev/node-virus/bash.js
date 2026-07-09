/*
fs.appendFile(@param1,@param2,@param3)
@param1=>file name (<path>)
@param2=>data to write to the file
@param3=>callback function (@errorParam) if there is an error
-> successful
*/

/*
for loops, while loops
->we are going to create an application
->function <give it any name>
void function-> function that does not take any parameters
-> create a file -> name of file is currentdate.txt
and 10k lines of code.
<got you 1>
<got you 2 >
<got 3>
-> use a for loop
file system api-> nodejs
*/

//throw { message: "not working", data: "" };

// function testAppendFile() {
//     const fileData = "\nHello world testing file\n";
//     const cb = (error) => {
//         if (error) {
//             console.log("creating file failed");
//             console.log(error);
//             ///settimeout()
//         }
//     };
//     fs.appendFile("testfile.txt", fileData, cb);
// }
//testAppendFile()

// Bringing in the File System module
const fs = require("fs");
// Function that takes no arguments
function createFile() {
  // Set up a variable to hold all our text content
  let data = "";
  // Run the loop 10000 times, starting at 1
  for (let i = 1; i <= 10000; i++) {
    data += `Got you ${i}\n`;
  } // Save the data to currentdate.txt ==> .writeFile (overwrites whatever's in the file)
  fs.writeFile("currentdate.txt", data, (err) => {
    if (err) {
      console.log("Error creating file.");
      console.log(err);
      return;
    }
    console.log("File created successfully!");
  });
}
// Run the function
createFile();
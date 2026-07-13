/*
access individual parts of your object.
2 ways of accessing object properties
  1.dot notation<does not work for anything but looks good>
    -does not work for properties which are
        -numbers
        - string with spaces,starting with a number or special symbols
        -can only access properties that follow variable naming rules
  2.bracket notation<will work for eveything:looks>
    -*access properties using variables.*

For each property of your object.includes nested ones
 access it using both
dot notation and bracket notation.
print the value and also print its type

Hint for nested properties use example. car.manufacture.name or car["managurcture"]["name"]
*/
//car and its name using dot notation
//console.log(`Name is ${car.name} its type is ${typeof car.name}`);
//bracket notation
//console.log(`Name is ${car["name"]} its type is ${typeof car["name"]}`);
//car model
//console.log(`Model is ${car.model} its type is ${typeof car.model}`);
//bracket notation
//let v1 = "model";
//console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`);

//solution//
//accessing individual parts

//dot
console.log(`Name is ${car.name} and its type is ${typeof car.name}`);

//bracket
console.log(`Name is ${car['name']} and its type is ${typeof car['name']}`);

//dot
console.log(`Model is ${car.model} and its type is ${typeof car.model}`);

//bracket
const v1 = car['model'];
console.log(`Model is ${v1} and its type is ${typeof v1}`);

//dot
console.log(
  `Top speed is ${car.top_speed} and its type is ${typeof car.top_speed}`
);

//bracket
const v2 = car['top_speed'];
console.log(`Top speed is ${v2} and its type is ${typeof v2}`);

//using , to avoid the [object Object] error
//this is for objects specifically

//dot
console.log(
  `Engine info is `,
  car.engine_information,
  `and its type is ${typeof car.engine_information}`
);

//bracket
const v3 = car['engine_information'];
console.log(`Engine info is`, v3, `and its type is ${typeof v3}`);

//dot - nested property
console.log(
  `Cylinders is ${car.engine_information.cylinders} and its type is ${typeof car.engine_information.cylinders}`
);

//bracket - nested property
console.log(
  `Cylinders is ${car['engine_information']['cylinders']} and its type is ${typeof car['engine_information']['cylinders']}`
);

//dot
console.log(
  `Manufacturer is`,
  car.manufacture,
  `and its type is ${typeof car.manufacture}`
);

//bracket
const v4 = car['manufacture'];
console.log(`Manufacturer is`, v4, `and its type is ${typeof v4}`);

//dot - nested property
console.log(
  `Manufacturer name is ${car.manufacture.name} and its type is ${typeof car.manufacture.name}`
);

//bracket - nested property
console.log(
  `Manufacturer name is ${car['manufacture']['name']} and its type is ${typeof car['manufacture']['name']}`
);

//dot
console.log(`Fun fact is ${car.fun_fact} and its type is ${typeof car.fun_fact}`);

//bracket
const v5 = car['fun_fact'];
console.log(`Fun fact is ${v5} and its type is ${typeof v5}`);

//dot
console.log(
  `Is it a classic? ${car.is_it_a_classic} and its type is ${typeof car.is_it_a_classic}`
);

//bracket
const v6 = car['is_it_a_classic'];
console.log(`Is it a classic? ${v6} and its type is ${typeof v6}`);


//Accessing JavaScript Properties


//You can access object properties in these ways:

//let age = person.age;        // dot notation
//let age = person["age"];     // bracket notation
//let age = person[x];         // expression (x holds the property name)

//Dot notation is generally preferred for readability. 


// Bracket notation becomes necessary when:
//The property name is stored in a variable: person[myVariable]
//The property name isn't a valid identifier (has spaces, dashes, etc.): person["last-name"]



//Changing a property:
//person.age = 10;


//Adding a new property:
//person.nationality = "English";



//Deleting a property : the delete keyword removes both the key and value:
//delete person.age;
// or
//delete person["age"];
//After deletion, accessing that property returns undefined.


//Checking if a property exists : use the in operator:
//let result = ("firstName" in person);


//Nested objects : a property's value can itself be an object, and you can access nested values with dot, bracket, or a mix of both:

/*myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];

let p1 = "myCars", p2 = "car2";
myObj[p1][p2];  // using variables*/
/*
    
Objects are variables that can store both values and functions.

Values are stored as key:value pairs called properties.

Functions are stored as key:function() pairs called methods.

In real life, we can describe subjects as objects (a car, a person, a house)

Different cars have the same properties, but the property values can differ from car to car.

Different cars have the same methods, but the methods can be performed at different times.

Object Literal

An object literal is the simplest and most common way to define a JavaScript object.

An object literal "literally" describes an object using a concise syntax with zero or more key:value pairs inside curly braces to describe all the object properties:

//How to Create a JavaScript Object

//1.Object literal

 const person={firstName:"Patricia", lastName:"Wanjiru", age:35, eyeColor:"brown"}

// 2.Start empty, add properties later

const person = {};
person.firstName = "Patricia";

//3.Using new Object()  not recommended, literals are simpler and faster

const person = new Object({firstName: "Patricia"});

*/
   // Create an object called car.
   // Properties: name,model,top_speed,color
   // Engine information:<object>cylinder 
   // Manufacturer:<object> name,aka,country
    //Number as a property<key>
   // alert_info:function that when called prints information of the car as an alert 
   /// fun fact<key>
    //</key></key>is_it_a_classic<property>:value<boolean>

const car = {
  name: "Chiron",
  model: "Super Sport 300+",
  top_speed: 490, // km/h

  engine_information: {
    cylinders: 16 // W16 engine
  },

  manufacture: {
    name: "Bugatti",
    aka: "Bugatti Automobiles S.A.S.",
    country: "France"
  },

  fun_fact: "The Chiron Super Sport 300+ was the first car to break 300 mph.", // optional
  is_it_a_classic: false, // optional — too new to be a classic yet

  alert_info: function() {
    alert(
      `Name: ${car.name}
      Model: ${car.model}
      Top Speed: ${car.top_speed} km/h
      Cylinders: ${car.engine_information.cylinders}
      Manufacturer: ${car.manufacture.name} (${car.manufacture.aka}) - ${car.manufacture.country}`
    );
  }
};


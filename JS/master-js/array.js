//An Array is an object type designed for storing data collections.
//Key characteristics of JavaScript arrays are:

//Elements: An array is a list of values, known as elements.

//Ordered: Array elements are ordered based on their index.

//Zero indexed: The first element is at index 0, the second at index 1, and so on.

//Dynamic size: Arrays can grow or shrink as elements are added or removed.

//Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

//example///*

/*HAVE ALL YOUR CAR VALUES FROM CAR OBJECT INSIDE THE ARRAY.
 ->add final element which is an array with your favourite numbers.
 ->ACCESS USING THE ARRAY ALL ITEMS.<DONT USE LOOP>
 ->use bracket notation
*/

const car = {
  name: "Chiron",
  model: "Super Sport 300+",
  top_speed: 490,
  engine_information: { cylinders: 16 },
  manufacture: { name: "Bugatti", aka: "Bugatti Automobiles S.A.S.", country: "France" },
  fun_fact: "The Chiron Super Sport 300+ was the first car to break 300 mph.",
  is_it_a_classic: false
};

// all car values inside an array, plus a final array of favorite numbers
const carArray = [
  car.name,
  car.model,
  car.top_speed,
  car.engine_information,
  car.manufacture,
  car.fun_fact,
  car.is_it_a_classic,
  [7, 13, 21, 42] // favorite numbers
];

// access using bracket notation (no loop)
console.log(carArray[0]); // "Chiron"
console.log(carArray[1]); // "Super Sport 300+"
console.log(carArray[2]); // 490
console.log(carArray[3]); // { cylinders: 16 }
console.log(carArray[4]); // { name: "Bugatti", aka: "...", country: "France" }
console.log(carArray[5]); // "The Chiron Super Sport 300+ was the first car to break 300 mph."
console.log(carArray[6]); // false
console.log(carArray[7]); // [7, 13, 21, 42]


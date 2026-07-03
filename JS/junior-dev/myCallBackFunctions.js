/*
  - callback function
  ->for the following shapes:

  -circle 
  -rectangle
  -triangle

  1. for each of the shapes
    create a function<arrow, name>
    to calculate the area. ensure
    the function takes required parameters.
    test the function
*/

// 1. named function //
// Circle: area = π * r * r
function areaCircle(r) {
  const areaC = 3.142 * r * r;
  console.log(`The area of the circle is ${areaC}`);
}
areaCircle(10);

// 2. anonymous function,stored in a variable//
// Rectangle: area = length * width
const areaRectangle = function(length, width) {
  return `The area of the Rectangle is ${length * width}`;
};
console.log(areaRectangle(15, 20));

// 3. arrow function ,shortest way//
// Triangle: area = 0.5 * base * height
const areaTriangle = (base, height) => {
  const areaT = 0.5 * base * height;
  console.log(`The area of the Triangle is ${areaT}`);
};
areaTriangle(100, 50);  

 /*2. we are create a super function called shape.
    its going to take the following params:
    @param1=>function <correct shape> required
    @param2=>shape name<string>
    @param3=>s1 <required>
    @param4=>s2<optional>
    @param5=>s3<optional>
    -.inside your function shape.
    console each of the parameters and their types.
    -for each of your function ie for areaCircle,
    areRectangle, and areaTriangle
    call the shape function and pass the required params.
    example for areaCircle
    -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
    -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation*/

//// this is the super function that takes in any shape function
// and calls it with the sides i pass in//
function shape(shapeFunction, shapeName, side1, side2, side3) {
   // printing each param and its type so i can see whats coming in//
  console.log(`ShapeFunction ${shapeFunction} its a ${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} its a ${typeof shapeName}`);
  console.log(`side1 ${side1} its a ${typeof side1}`);
  console.log(`side2 ${side2} its a ${typeof side2}`);
  console.log(`side3 ${side3} its a ${typeof side3}`);

  const result = shapeFunction(side1, side2, side3);// calling the shape function with the sides i passed in and storing the result//

  
  console.log(`For shape${shapeName} Area is ${result}`);// printing the shape name and the final area result//
    return result;// sending the result back out of the function//
}

// testing all 3 shapes with the super function//
shape(areaCircle,"circle", 20);
shape(areaRectangle, "Rectangle", 15, 20);
shape(areaTriangle, "Triangle", 100, 50);

/*
shape() function is not responsible for calculating anything.
its job is simple:
- take in whatever function i give it
- show me what was passed in and what type it is
- run the function and show me the result
it doesnt care if its a circle, rectangle or triangle
i just swap out the function and it does the rest
*/

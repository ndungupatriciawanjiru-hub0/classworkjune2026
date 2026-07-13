/*
 look at the differences
 between an array and an object.
 ->in an array keys are sequential<numbers><>
*/
/*
create an object that behaves like an array.
1.create an array give it <any name>
  inside the array have two digits.
  0:<any digit>
  1:<any digit>
2.create an object. <any name>
  inside the object have keys.
  0:<any digit>
  1:<any digit>
  for the object create the length key.
  have it as size of the object<keys>
3.console.table both. you shoudl see there are
the same.
*/

/*
  push method:<we can see>
  arr.push(11).
  1.first a new key is created
  2.element is added to that key<>
  2.the length of the array is incremented
*/

/*
Try to recreate the pop method.
*/

const ar = [20, 5];
const arObj = {
  0: 20,
  1: 5,
  push: function (newItem) {
    //this <Access object inside object>instead of using the object name
    const key = this.length; //current key
    this[key] = newItem; //element added to that key
    this.length = this.length + 1; //incriment the length
    return this.length; //match native push() return value
  },
  pop: function () {
    //1. find the key of the last element
    const lastKey = this.length - 1;
    //2. grab the value at that key so we can return it
    const removedItem = this[lastKey];
    //3. delete that key entirely (real pop() removes it completely)
    delete this[lastKey];
    //4. decrement the length to match
    this.length = this.length - 1;
    //5. return the removed value, just like the real pop()
    return removedItem;
  },
  length: 2
};

console.table(ar);
console.table(arObj);

// test the pop method
const popped = arObj.pop();
console.log("Popped:", popped);
console.table(arObj);

// test the push method
arObj.push(99);
console.log("After push(99):");
console.table(arObj);
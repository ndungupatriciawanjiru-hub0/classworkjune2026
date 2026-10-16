/*
DOM Access using
1.querySelector
2.documentGet<...>

1.getElementById:
  -create a variable assign to the dom element with id<div1>
  -console.log this element :view in your browser
  -in browser console you should be able hover over the element

2.getElementByClass
  -create a variable assign to the dom element with with class<list-item
  -console.log this element :view in your browser
  -in browser console you should be able hover over the element>

3.querySelector:
  1.for the id: hint use # for id
    -create a variable assign to the dom element with id<div1>
    -console.log this element :view in your browser
    -in browser console you should be able hover over the element
  2.<use querySelector>for the class: hint use <.>
    -create a variable assign to the dom element with class<list-item>
    -console.log this element :view in your browser
    -in browser console you should be able hover over the element
    -Note you only get the first list item.
  2.<use querySelectorAll>for the class: hint use <.>
    -create a variable assign to the dom element with class<list-item>
    -console.log this element :view in your browser
    -in browser console you should be able hover over the element
    -Note you get the array.
    -use a for loop or while to go through the array elements
      and print each element.
*/

// 1. getElementById
//const divById = document.getElementById("div1");
//console.log(divById);

// 2. getElementsByClassName
//const itemsByClass = document.getElementsByClassName("list-item");
//console.log(itemsByClass);

// 3. querySelector
// for the id
//const divByQuery = document.querySelector("#div1");
//console.log(divByQuery);

//  querySelector for the class 
//const firstItemByQuery = document.querySelector(".list-item");
//console.log(firstItemByQuery);

//   querySelectorAll for the class (returns all matches)
//const allItemsByQuery = document.querySelectorAll(".list-item");
//console.log(allItemsByQuery);

// loop through the list and print each element
//for (let i = 0; i < allItemsByQuery.length; i++) {
//  console.log(allItemsByQuery[i]);
//}
/*
   Update DOM elements
   -innerHtml<replaces the HTML>
   -innerText<replaces the innertext>

   Create 3 buttons
   1. Original content
   2. Updating Content
   3. Update the inner text
*/

const otherFruits = ["Durian", "Soursop", "Mangosteen"];
const originalDiv = document.querySelector("#div2").innerHTML;
// console.log(originalDiv);

function original() {
  console.log("original clicked");
  //reset the div to its original value
  document.querySelector("#div2").innerHTML = originalDiv;
  //replace the original content
}

function replace() {
    console.log("replace clicked");
    //new html content to replace the original content
    const newHtml = `
    <h3>List Chores</h3>
    <ul>
      <li class="list-item">Clean Bathroom</li>
      <li class="list-item">Clean Kitchen</li>
      <li class="list-item">Fetch Water</li>
    </ul>
  `;

    document.querySelector("#div2").innerHTML = newHtml;

}

function updateFruits() {
  console.log("update fruits clicked");

  // only swap the fruit names, using innerText, via a loop
  const fruitItems = document.querySelectorAll("#div2 .list-item");
  for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].innerText = otherFruits[i];
  }
}

// wire buttons to functions
document.getElementById("originalButton").addEventListener("click", original);
document.getElementById("replaceButton").addEventListener("click", replace);
document.getElementById("updateFruitsButton").addEventListener("click", updateFruits);
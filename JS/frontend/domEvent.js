/*HTML Events
HTML events are things that happen to HTML elements.

Examples of events:

-An HTML button is clicked
-A web page has finished loading
-The mouse moves over an element
-A keyboard key is pressed
-An HTML input field is changed */

/*How to Use Events
Inline in HTML (not recommended)
Assign in JavaScript (element.onclick = ...)
Best: addEventListener() (most flexible and preferred) */

/*Event Object
Passed automatically to event handlers
Gives info like:
event.target → element triggered
event.type → event name */

/*preventDefault()
Stops default browser behavior (e.g. form reload)*/

/*Events = “When something happens → run some code”*/

/*
create a button.
1.attach a click event which shows an alert
2.attach a mouseover which console.log the current date
  for each of the events print the event. ie console.log(event)
*/

const eventBtn = document.getElementById("eventBtn");

// 1. click event -> shows an alert
eventBtn.addEventListener("click", function (event) {
  alert("Button was clicked!");
  console.log(event);
});

// 2. mouseover event -> logs the current date
eventBtn.addEventListener("mouseover", function (event) {
  console.log(new Date());
  console.log(event);
});

/*
We can attach an event to window<active tab>
for on mouseMove and print out the co-ordinates of the mouse.

have x and y cordinates being display on the screen when someone moves.
*/

const coordsDisplay = document.getElementById("coords");

window.addEventListener("mousemove", (e) => {
  console.log("x direction", e.clientX);
  console.log("y direction", e.clientY);

  coordsDisplay.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});
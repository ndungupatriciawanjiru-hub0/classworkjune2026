/*-The HTML DOM (Document Object Model) represents a web page as a tree of objects.
-JavaScript can use the DOM to access, change, add, or delete HTML elements.
-DOM Structure
The page is structured like a tree (parent → child elements).
Example:
<html> → parent
<body> → child
<p> → child of body

-What JavaScript Can Do with the DOM
-Find elements (by id, class, tag)
-Change content (innerHTML)
-Change styles (style.color)
-Add/remove elements
-Handle events (clicks, inputs)  

-Finding Elements

Common methods:
-getElementById()
-getElementsByClassName()
-getElementsByTagName()
-querySelector() / querySelectorAll() 

Changing Elements

Content:
-element.innerHTML = "New text";

Attributes:
-element.src = "image.jpg";

Styles:
-element.style.color = "red";

Adding & Removing Elements:
-createElement()
-appendChild()
-removeChild()
            
NB:The DOM lets JavaScript control the webpage dynamically after it loads.*/
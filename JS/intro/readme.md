## What Are JavaScript Variables?

 - A variable is a named container that stores a value in your program.
 
 **Real-life example:**
 - Think of a variable like a cup. The cup has a label on it(the name) you can put anything inside it (the value).
 - let cup ="juice";   //cup is holding juice
 - cup ="water";      //now the same cup holds water

## How Do You Declare Variables in JavaScript?

 -We use three keywords to create variables:

 

1.**var**-is like the old way grandma used to name pets,it still works but nobody really does it that way anymore.

**Real-life example:**

		var oldPet ="parrot"; //old fashioned way

 2.**let** — Modern way for variables whose value can change.
 
**Real-life example:**
**Think of it like giving a pet  a name:**
**let**- is like a pet you can swap out. Today it's a cat ,tomorrow it's a dog the name stays but what's inside can change.

	let pet ="cat";
	pet ="dog"; //**changed my mind !

3.**const**-For values that should not change after they are set.

**Real-life example:**
 const is like a pet that's yours forever and never changes. Once you name it that's it.

	const myPet ="turtle";//always a turtle,forever !

## Rules for Naming Variables

The following are the rules for naming variables in JavaScript:

-   Spaces are not allowed in variable names.
-   Only letters, digits, underscores (_), and dollar signs ($) are permitted.
-   Case matters — variable names are case-sensitive.
-   Must start with a letter, underscore (_), or dollar sign ($).
-   Cannot use reserved words/keywords like let, const, function, if, etc.


**Valid examples**:

	-   userName
	-   totalScore
	-   _privateValue
- 
**Invalid examples**:

	-   first name (contains space)
	-   2ndPlayer (starts with number)
	-   let (reserved keyword)
	- 
##  Variable Naming Styles

### Camel Case (Recommended )

Starts with lowercase letter, then each new word starts with capital letter.

**Examples**: studentGrade, calculateTotalAmount

### Pascal Case

Every word starts with a capital letter.

**Examples**: UserProfile, ShoppingCart

### Snake Case

All lowercase with underscores between words (common in Python).

**Examples**: user_name, max_score

## Summary

This lesson taught me that variables are very important in JavaScript because they help us store and manage data. I learned the differences between var, let, and const, why we should avoid using var, the rules for naming variables, and the different styles like Camel Case  (recommended), Pascal Case, and Snake Case. Understanding variables gives a good foundation before we move to topics like functions, objects, arrays, and DOM.

## Variables

Variables are used to store data values in JavaScript.

# Primitive Data Types

Primitive data types include:

- **String**: Represents textual data.
- **Number**: Represents numeric values 
- **Boolean**: Represents true or false.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents the  absence of any object value.


-----

## Ways to Create a String Variable (3 ways)

### 1. Double Quotes

Use when your text has single quotes inside.


let str1 = "I am patricia";
let str2 = "Daniel said '23 is a number'";
```

### 2. Single Quotes

Use when your text has double quotes inside.


let str1 = 'I am patricia ';
let str2 = 'Daniel said "23 is a number"';
```

### 3. Backticks (Template Strings)

Use for multi-line strings or when mixing quotes.


let str1 = `I am patricia`;
let str2 = `Multi line string
Multi line strings
"" '' both single and double quotes`;


## Difference Between Undefined and Null

### Undefined

A variable declared but no value given yet.


let name;
console.log(name); // undefined
```

### Null

Deliberately set to empty.


let name = null;
console.log(name); // null
```

**Simple way to remember:**

- `undefined` = forgot to give it a value
- `null` = chose to leave it empty





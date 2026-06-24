
// Scenario 1: truthy variable in if condition
// so the if statement will run
let scenarioOne = "Patricia Ndung'u"
if(scenarioOne){
    // this will print because scenarioOne is truthy
    console.log("Scenario 1 it run")
}

// Scenario 2: falsey variable in if condition
// 0 is a falsey value in javascript
let scenarioTwo = 0
if(scenarioTwo){
    // this will NOT print because 0 is falsey
    console.log("Scenario 2 it run")
}

// Scenario 3: if condition with true
// true is always truthy

if(true){
    // this will print because true is always truthy
    console.log("Scenario 3 it run")
}

// Scenario 4: if condition with false
// false is always falsey

if(false){
    // this will NOT print because false is always falsey
    console.log("Scenario 4 it run")
}

// Scenario 5: if condition with 10>20
// 10 is NOT greater than 20
// so the condition evaluates to false
// so the if statement will NOT run
if(10>20){
    // this will NOT print because 10 is less than 20
    console.log("Scenario 5 it run")
}

// Scenario 6: if condition with 20>10
// 20 IS greater than 10
// so the condition evaluates to true
// so the if statement will run
if(20>10){
    // this will print because 20 is greater than 10
    console.log("Scenario 6 it run")
}
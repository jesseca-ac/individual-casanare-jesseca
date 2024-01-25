console.log("Hello B364!");

// [Section] Functions
// Functions in JS are lines/blocks of codes that perform a certain task when called/invoked

// Function Declaration
// Fucntion statement defines a function with specified parameters

// printName();

function printName() {
    console.log("My name is John");
};

printName();
printName();
printName();
printName();
printName();

function declaredFunction() {
    console.log("Hello world from declaredFunction()")
};

declaredFunction();

// printName();

// Function Expression
// a function expression can be stored in a variable
// it is an anonymous function assigned to a variable

let variableFunction = function() {
    console.log("Hello Again!");
};

variableFunction();

let functionExpression = function funcName() {
    console.log("Hello from the other side");
};

functionExpression();

declaredFunction = function() {
    console.log("updated declaredFunction");
};

declaredFunction();

funcExpression = function() {
    console.log("updated funcExpression");
};

funcExpression();

// reassigning values with const

// const constantFunc = function() {
//     console.log("initialized with const!");
// };

// constantFunc();

// constantFunc = function() {
//     console.log("Cannot be re-assingned");
// };

// Function Scoping
// scope is the accessibility and visibility of variables
// JS variables have 3 types of scope: local/block, global, function

{
    let localVar = "Armando Perez";
};

let globalVar = "Mr. Worldwide";

console.log(globalVar);
// console.log(localVar);

function showNames() {
    var functionVar = "Joe";
    const functionConst = "John";
    let functionLet = "Jane";

    console.log(functionVar);
    console.log(functionConst);
    console.log(functionLet);
};

showNames();

// console.log(functionVar);
// console.log(functionConst);
// console.log(functionLet);

// Nested Functions

function myNewFunction() {
    let name = "Jane";

    function nestedFunction() {
        let nestedName = "John";
        console.log(name);
    };

    nestedFunction();
    // console.log(nestedName);
    // nestedName variable can't be accessed outside the function it was declared in
};

myNewFunction();
// nestedFunction();

// Global scoped variable
let globalName = "Alexandro";

function myNewFunction2() {
    let nameInside = "Renz";

    console.log(globalName);
};

myNewFunction2();

// using alert()

// 
function showSampleAltert() {
    alert("Hello, User!");
};

// showSampleAltert();

// console.log("I will only log in the console when the alter is dismissed");

// using prompt()
// shows a small window to gather user input. much like altert

// let samplePrompt = prompt("Enter your name.");

// console.log("Hello, " + samplePrompt);

// let sampleNullPrompt = prompt("Dont enter anything");
// console.log(sampleNullPrompt);

function printWelcomeMessage(){
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");

    console.log(`Hello, ${firstName} ${lastName}!`);
    console.log("Welcome to my page!");
};

printWelcomeMessage();


// proper function naming conventions
// usually a verb

function getCourses() {
    let courses = ["Science 101", "Math 101", "English 101"];
    console.log(courses);
};

getCourses();

function displayCarInfo() {
    console.log("Brand: Toyota");

};

displayCarInfo();
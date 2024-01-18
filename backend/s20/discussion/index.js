
// [SECTION] Syntax, Statements and Comments

// Statements:

// Statements in programming are instructions that we tell the computer to perform

// JS statements usually end with semicolon (;)

// Semicolons are not required but we will use it to help us train to locate where a statement ends

// a syntax in programming is the set of rules that describe how statements must be constructed

/*
Where to place JavaScript
- inline you can place JS right into the html page using script tags, this is good for very small sites and testing only. does not scale well, leads to poor organization and code duplication
- External file is a better approach
*/

// alert('Hello Again');

// This is a statement
console.log('Hello B364')

console. log( 'Hello World ' );

console.
log
(
    'Hello Again'
)

// whitespaces can impact functionality in many computer languages but not in JS

// whitespaces are only used for readability and has no functional impact

let myVariable;
console.log(myVariable)

let hello;
console.log(hello);

// Declaring and initializing variables
// initializing variables is the instance when a variable is given it's initial or starting value

/*
Guides in writing variables:
1. Use the "let" keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
2. Variable names should start with a lowercase character, use camelCase for multiple words.
3. For constant variables, use the 'const' keyword.
4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.
Best practices in naming variables:
1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains.

	let firstName = "Michael"; - good variable name
    let pokemon = 25000; - not a good variable name

    Camelcase:

    lastName emailAddress mobileNumber

    Underscores:

    product_description product_id
*/


let friend = 'Kate';
friend = 'Jane';
console.log(friend);

// let friend = 'Kate';
// friend = 'Jane';
// console.log(friend);

// use const when you declare
//  array, object, function

let supplier;
supplier = "John Smith Tradings";
console.log(supplier);

supplier = "Zuitt Store";
console.log(supplier);

// can you declare a const without initialization - NO

// Data Types
// string, boolean, number, null, undefined, object

// in JS strings can be written using either single or double quotes
// in other programming languages, only the double quotes can be used for strings

// undefined vs null
// one clear difference is that for undefined, a variable was created but was not provided a value
// while null means that a variable was created and assigned a value that does not hold any value/amount
// certain processes in programming would often return null when certain tasks results to nothing
// for undefined, normally caused by developers creating variables with no data associated with them


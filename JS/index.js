// first JS code
console.log("Hello World");

// variable, use let
let name; // name currently is undefined 
name = "Yuwei" // declare
console.log(name);

// can not reassign a const
const num = 0.3;

// Primitives Type: String, Number, Boolean, undefind, null
name = "abc";
let age = 123.1;
let isApprove = true;
let dummy = null; // but type is object

// Reference Type: Object, Array, Fuction
    // object
let person = {
    name: "Yuwei",
    age: 3
};
console.log(person);
console.log(person.age);
person.name = "Yirong"; // Dot notation
let selection = "name";
person[selection] = "Yirong"; // Bracket notation
 
    // array(length and type are dynamic)
let selectionColors = ["red","blue"];
console.log(selectionColors);
selectionColors[2] = "green"; // add item by index
console.log(selectionColors[2]);
selectionColors[0] = 1;
console.log(selectionColors.length);

    // functions

function greet(name,age) { // age by default is undefined 
    console.log("Hello " + name);
} // no need ;
greet(person.name);

function square(number) {
     return number * number;
}

let square = square(2);

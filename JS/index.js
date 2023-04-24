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

let squareResult = square(2);
alert.squareResult;

// querySelector
    // Selet first h1 element, and assign it to myHeading. Change myHeading to ...
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
    // Selet all h1 elements, can make them unchangable
const headings = document.querySelectorAll('h1');
headings.forEach((heading) => {
    heading.textContent = 'Hello World!';
});

//Events
    // add a EventListener to HTML. When click, it will call a function
document.querySelector("html").addEventListener("click", function () {
    alert("Got a click");
  });

// eg1: Adding an image changer (by modify atttibutes of a element)
let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images/1.jpeg") {
    myImage.setAttribute("src", "images/2.jpeg");
  } else {
    myImage.setAttribute("src", "images/1.jpeg");
  }
};

// proxy

let myButton = document.querySelector("button");
let welcomeHeading = document.querySelector("#welcom"); // specific id
    // function
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    welcomeHeading.textContent = `Welcome ${myName}`;
  }
    // Determine if localStorage have name, if not ask.
if (!localStorage.getItem("name")) {
    setUserName();
} else {
  const storedName = localStorage.getItem("name");
  welcomeHeading.textContent = `Hello, ${storedName}`;
}
    //listen button
myButton.onclick = () => {
    setUserName();
  };


  
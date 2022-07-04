// console.log("hello world!");

// let arr = [1,2,3,4,5]

// first_method
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// second method
// arr.forEach((element) => {
//     console.log(element);
//   })

// date method

// console.log(new Date())
// console.log(new Date().getTime());
// let s = "Utkarsh";
// const x = 12.345;
// console.log(s.substring(0,3));
// console.log(s.lastIndexOf("r"));
// console.log(s.slice(0,4));
// console.log(s.slice(-2));
// console.log(s.substr(1,4));
// console.log(s.toLocaleLowerCase());
// console.log(s.toLocaleUpperCase());
// console.log(s.concat(" ","pandit"));
// console.log(s.toLocaleLowerCase());
// console.log(x.toFixed(1));
// console.log(typeof "1");
// console.log(typeof true);

// Object
// const obj = {
//     name : "utkp",
//     college : "IPU"
// };
// console.log(obj);
// console.log(obj.name);

// coercion
// if (1 == "1") {
//     console.log(true);
// }

// traditional method 
// function apple() {
//     console.log("mango");
// }
// apple();

// arrow function
// const apple = () => {
//     console.log("banana");
// };

// apple();



// ****NOTES********NOTES********NOTES********NOTES********NOTES********NOTES****



//first
// const s = "apple";

// s = "car";

// console.log(s.substring(0,3));

//second

// console.log(s.lastIndexOf("p"));

//third
// console.log(s.slice(0, 3));

// console.log(s.slice(-3));

// console.log(s.substring(-3));

//fourth
//start //length
// console.log(s.substr(2, 2));

//fifth

// console.log(s.replace(s, "car"));

//sixth
// console.log(s.toLowerCase());

// console.log(s.toUpperCase());

//seven

// console.log(s.concat(" ","mango"," ","mango"," ","mango","mango","mango"));

//eigth

// console.log(s);
// console.log(s.trim());

// const x = 12.355;

// console.log(x.toFixed(1));

// precedence --> () / "/"  / * / + / -

//Data types

//1. Primitive
// Number, String, undefined, null, BigInt, Symbol, Boolean

//2. Non-primitive
// functions, arrays

// console.log(typeof true);

// const object = {
//   //key         // value
//   name    :       false,
//   college :         1,
//   var     :      "random",
// };

// console.log(object.name);

//plus sign alwys prefers string addition operation

// let s = 10 + 10;

//minus operation always prefers calculation
// let s = "utkarsh" - 10;
// console.log(s);  output --> NaN

//it was expecting a number but did not succeed
// console.log(typeof NaN); // Not a number

//coercion

//checks data type as well as value
// if (1 == "1") {
//   console.log(true);
// }

//checks data type as well as value
// if (1 === "1") {
//   console.log(true);
// } else {
//   console.log(false);
// }

//traditional
// function apple(parameter) {
//   console.log(parameter);
// }

//arrow
// const apple = (params) => {
//   console.log(params);
// };

// apple("apple");

// (function apple(parameter) {
//   console.log(parameter);
// })("Apple");

// Functions
// Functions are the vip's in js

// Function can be assignd to a variable
// function can be returned from the function
// function can be passed to another function - Callback

// 1st
// var variableName = function (param) {
//   console.log(param);
// };

// variableName();

// variableName("apple");

// 2nd

// const variableName = function () {
//   return function () {
//     console.log("apple");
//   };
// };

// variableName();

// callbacks are the functions that are passed as an argument to another function

// let, const, var

// const name = "apple"; // constant

// var name = "apple"; // for global scope, reassign , redeclare
// var name;

// console.log(name);

// let

// let name = "apple"; // reassign , usually within function

// name = "mango";

// console.log(name);

// camel casing, underscore

// 1'st camel casing
// function returnsName(){

// }

// 2'nd underscore
// function returns_name(){

// }

// why interpreted

// console.log(x);

// const x = 10;

// why compiled

//Hoisting

// ftn();

// const ftn = function () {
//   console.log("apple");
// };

// currying
// function ftn(a) { // first second third
//   return (b) => {
//     return (c) => {
//       return a + b;
//     };
//   };
// }

//function
// function ftn2(a, b, c) {
//   return a + b + c;
// }

// console.log(ftn2(10, 20, 30));

// console.log(ftn(10)(20)); 

// Hold
// function apple() {
//   return function calc() {
//     return 10;
//   };
// }

// var test = apple();

// console.log(apple());



// ****NOTES********NOTES********NOTES********NOTES********NOTES********NOTES****



//+++++MY_NOTES+++++++++MY_NOTES+++++MY_NOTES++++++++++++MY_NOTES++++++++++MY_NOTES+++



// console.log(9-"5"); _bug_
// console.log("utkarsh" - "pandit");
// false --> 0
// true --> 1
// console.log(false + true); 
// console.log(true + true); 
// console.log(false - true); 

// Q1. swap a number without using third variable.
// Answer
//  var a = 10;
//  var b = 20;
//  a = a+b;
//  b = a - b;
//  a = a - b
//  console.log("value of a "+ a);
//  console.log("value of b "+ b);

// Q2. WAP to check whether a given yr is leap year or not.
// Answer
// var yr = 2024
// if (yr % 4 == 0 || yr % 400 == 0 ) {
//     console.log("It's a leap Year");
// } else {
//     console.log("It's not a leap Year");    
// }

//***return function***
// function sum(x,y) {
//     return x + y;
// }
// let z = sum(10,20);
// console.log("the sum is : "+z);

//***Anonymous***
//  var x = function(x,y) {
//     return x + y;
// }
// let z = x(10,20);
// console.log("the sum is : "+z);

//***Array with for Each***
// let arr = ["hello","good","morning","utkarsh","pandit"]
// arr.forEach(function (element){
//     console.log(element);
// });

//***Array with for Arrow function***
// let arr = ["hello","good","morning","utkarsh","pandit"]
// arr.forEach((element) =>{
//     console.log(element);
// })

// Q3.
arr = [4,9,16,25,36,49,64,81,100]
var sqrt = arr.map((element) =>{
    return Math.sqrt((element))
})
console.log(sqrt);

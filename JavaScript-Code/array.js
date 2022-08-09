// Array is a variable that is used to store more than one value at contigious location 
// in js Array are object

// let marks = [1,2,3,4,5];

// console.log(marks); // it will return asetive same to same on console

// console.log(marks[2]); // it will return the actual value that is stored in an array


// another method to access Array
// let fruits = ["mango","apple","banana","pineapple","stawberry"];

// for (let i = 0; i < fruits.length; i++) {
    
//     console.log(`Fruit No ${i} ` + fruits[i]);
// }


// --------------------------

let num = [1,2,3,4,5,6]
let b = num.toString(); //num ko string me convert kr diya 
console.log(b);

let c = num.join(" and ")
console.log(c);


// pop (pop the elements from end)|| push || shift (shift the elements from start) || unshift  
//shift and pop are one and the same thing they both are doing same functionality

let x = num.push(7);
console.log(num);


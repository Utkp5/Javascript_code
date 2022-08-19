let num = [10,5,7,3,9];

// -------------- Using for loop ------------------
for(let i = 0; i<num.length; i++)
{
    console.log(num[i]);
}


// ------------- Using for Each loop -------------
num.forEach((e) => {
    console.log(e*2);  //calls a function once for each array element
})


//---------------- Using array from ------------------
let name = "UTKARSH";
let arr = Array.from(name);  //it is basically used to create array from object
console.log(arr);


// ----------------- For of loop ---------------------
for (let i of num) {
console.log(i);   // it is basically return the value of an array
}


// ------------------ For in -----------------------
for (let x in num) {
console.log(x);   // it is basically return the index of an array
console.log(num[x]);   // to access the value of an array we have to write like this
}

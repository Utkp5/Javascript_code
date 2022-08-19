let num = [20,15,87];


//--------------- map method -------------
num.map((numm) => {
    console.log(numm);        // it basically make a new array from an existing array
})

let x = num.map((numm) => {
    console.log(numm);    // value , index , array
    return numm + 1;
})
console.log(x);



//-------------------- Filter method ---------------------
let num1 = [36,38,29,2];

let y = num1.filter((numm1) => {
    // console.log(numm1);
    return numm1<30;        //it basically return the new array after fullfill the condition that we have written
})
console.log(y);



//------------------------- Reduce method ------------------
let num3 = [12,14,16,13];

// without call function
let z = num3.reduce((a , b) => {
    return a + b;          // little bit confused about this reduce method what it is doing
});
console.log(z);

// with call function
const reduce_fun = (h , u) => {
 return h + u;
}
let p = num3.reduce(reduce_fun); //<--- here
console.log(p);

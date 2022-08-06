const obj = {
    maths : 90,
    java : 100,
    html : 98,
    css  : 70,
}

//for in loop basically used with object .
for (let key in obj) {
    console.log("Marks in " + key + " Subject is " + obj[key]);
}


//Simple average of a number.
const mean = (w,x,y,z) => {
    return((w+x+y+z)/4);
}

console.log(mean(2,16,22,10));

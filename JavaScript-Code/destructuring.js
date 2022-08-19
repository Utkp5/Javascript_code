let names = ["rahat" , "ravi" , "rahul"];

let x = [name1 , name2 , name3] = names;

console.log(x);


//Using array

function calculate(a , b) {
    let add = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;

    return [add , sub , mul , div];  //yaha array return ho raha hai na ki simple return for your confusion
}

const [add , sub , mul , div] = calculate(10 , 5);

console.log(`ADD : ${add}`);
console.log(`sub : ${sub}`);
console.log(`mul : ${mul}`);
console.log(`div : ${div}`);


//Using Object
const vehicleOne = {
    brand: 'suv',
    model: 'kompo',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    console.log(`My ${type} is a ${color} ${brand} ${model}`);
  }
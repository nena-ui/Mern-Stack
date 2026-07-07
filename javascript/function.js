
// Addition, Multiply, Subtraction, Division

const addition =(a,b) => a+b;
console.log(addition(10+90))


const subtraction =(a,b) => a+b;
console.log((10+90))


const multiply = (a,b) =>  a*b;
console.log(multiply(10,5))


const division = (a,b) => a/b;
console.log(division(200,20))


//Array 
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num * num);
});


let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

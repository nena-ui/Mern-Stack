console.log("functions page")

function greet(){
    let a = 5
    for(i=0;i<a;i++){
        console.log("hello world!!!!")
    }
}

greet()
greet()

function againgreet (){
    console.log("greeted again")
}

againgreet()


const sum = (a,b) =>  a+b


sum(3,2)
sum(10,4)

function multiply(a,b){
    return a*b
   
   
 
}



let product = multiply(5,4)
let sumValue = sum(5,4)
let sumValueofcbadhcba = sum(10,99)

console.log(product,sumValue)

function isEven(x) {

    if (x%2===0) {
        return "even"
    }
    else{
        return "odd"
    }
}

//    console.log(isEven(3))

let result = isEven(4)
console.log(result)


console.log(multiply(3,7))


let some = "abc"

//nested function

function calculate (t,r){


    function add (t,r){
        return t+r
     }
     function photoclick (){
        return "clicked"
     }

     let result = sum(t,r)
          photoclick()
     return  result

}

console.log(calculate(5,6))


// console.log(sum(88,2))


function calculator (a,b,operation) {
    return operation(a,b)

    // sum(5,6)

}

let sumResult = calculator(7,8,sum)
let mulResult = calculator(7,8,multiply)



console.log(sumResult,mulResult)


let a = "apple"
const checkNum = (num)=> {
    if(num>0) {
        return "positive"
    }
    else if (num<0){
        return "negative"
    }
    else{
        return "zero"
    }
}

function callback(a,one){
    return one(a)
}

let number = callback(3, (num)=> {
    if(num>0) {
        return "positive"
    }
    else if (num<0){
        return "negative"
    }
    else{
        return "zero"
    }
})
console.log(number,"xkdajbgcjaygsvcjhvaeyc")



const jrakhdanihunxa = (a)=> console.log(a);




jrakhdanihunxa("from arrow function")


const numbers  = [1,2,3,4,5]

// numbers.forEach(element => {
    
// });


   numbers.slice(0,3).forEach((item)=>{
console.log(item) 
})

console.log(ggg)

// console.log("functions page")

// function greet(){
//     let a = 5
//     for(i=0;i<a;i++){
//         console.log("hello world!!!!")
//     }
// }

// greet()
// greet()

// function againgreet (){
//     console.log("greeted again")
// }

// againgreet()


// const sum = (a,b) =>  a+b


// sum(3,2)
// sum(10,4)

// function multiply(a,b){
//     return a*b
   
   
 
// }


// let product = multiply(5,4)
// let sumValue = sum(5,4)
// let sumValueofcbadhcba = sum(10,99)

// console.log(product,sumValue)

// function isEven(x) {

//     if (x%2===0) {
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }

// //    console.log(isEven(3))

// let result = isEven(4)
// console.log(result)
// console.log(multiply(3,7))
// let some = "abc"

// //nested function

// function calculate (t,r){
//     function add (t,r){
//         return t+r
//      }
//      function photoclick (){
//         return "clicked"
//      }

//      let result = sum(t,r)
//           photoclick()
//      return  result

// }
// console.log(calculate(5,6))
// // console.log(sum(88,2))
// function calculator (a,b,operation) {
//     return operation(a,b)

//     // sum(5,6)

// }
// let sumResult = calculator(7,8,sum)
// let mulResult = calculator(7,8,multiply)
// console.log(sumResult,mulResult)
// let a = "apple"
// // => arrow function 
// const checkNum = (num)=> {
//     if(num>0) {
//         return "positive"
//     }
//     else if (num<0){
//         return "negative"
//     }
//     else{
//         return "zero"
//     }
// }

// function callback(a,one){
//     return one(a)
// }


// let number = callback(3, (num)=> {
//     if(num>0) {
//         return "positive"
//     }
//     else if (num<0){
//         return "negative"
//     }
//     else{
//         return "zero"
//     }
// })
// console.log(number,"xkdajbgcjaygsvcjhvaeyc")
// const jrakhdanihunxa = (a)=> console.log(a);
// jrakhdanihunxa("from arrow function")
// const numbers  = [1,2,3,4,5]
// // numbers.forEach(element => {
// // });
//    numbers.slice(0,3).forEach((item)=>{
// console.log(item) 
// })
// // console.log(ggg)


//Print the square of every number in an array using forEach().
const num=[1,2,3,4,5]
num.forEach(num=> {
    console.log(num*num)
});


// Print only the even numbers from an array using forEach().
const number=[1,2,3,4,5,6,7,8,9,10]
number.forEach(number=>{
if(number%2==0){    
console.log(number,"Even")
}
});


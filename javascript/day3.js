// // // let marks=70;
// // // let result;
// // // if(marks>80){
// // //     console.log("A")
// // // }
// // //     else if(marks>60){
// // //         console.log("B")
// // //     }
// // //     else if(marks>40){
// // //         console.log("c")
// // //     }
// // //  else{
// // //     console.log("fail")
// // //  }
// // //  console(result,"result")
// // // let number=7
// // for(i=0;i<=20;i++)
// // {
// //     if(i%3==0  && i%5==0){
// //     console.log("fizz buzz",i)
// // }
// // else if(i%3==0 ){
// //     console.log("fizz ",i)
// // }
// // else if (i%5==0){
// //   console.log("buzz",i)   
// // }
// // else  {
// //     console.log("nothing",i)
// // }

// // }


let marks = 50;

let result;


if(marks>80){
    console.log("A")
}
    else if(marks>60){
        console.log("B")
    }
    else if(marks>40){
        console.log("c")
    }
 else{
    console.log("fail")
 }

 
 //logical operator
 let z = false && false  //false
 let a = false || false  //true


 let email = "abc"
 let pass = "1234"

 if (email ==="abcd" && pass === "1234") {
    console.log("login true")
 }
 else{
    console.log("invalid credentials")
 }

 let day = 'sunday'

 let something = day==='sunday' || day === 'saturday'

 if (day==='sunday' || day === 'saturday'){
    console.log("its weekend")
 }



//  3= 'fizz'
//  5 = 'buzz'
//  both = "fizzbuzz"


 let number=7

if(number%3==0 && number%5==0){
    console.log("fizz buzz")
}
else if(number%3===0 ){
    console.log("fizz ")
}
else if(number%5===0)  {
    console.log("buzz")
}
else{
    console.log("nothing")
}


for(let num = 0; num <= 20; num++){

    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num, "FizzBuzz");
    } else if (num % 3 === 0) {
        console.log(num, "Fizz");
    } else if (num % 5 === 0) {
        console.log(num, "Buzz");
    } else {
        console.log(num, "Nothing.");
    }

}

let i = 0
do {
    console.log("Something")
}
while (i!=0)


    // while (i!==0){
    //     console.log("hahahahah")
        
    // }
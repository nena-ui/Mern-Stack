console.log("hello ")
let number = 7
  

//if else statement 

if (number%2 == 0)  {
  console.log("number is even")  
}

else if (number === 5){
  console.log("number is equal to 5")

}
else{
  console.log("number is not greater than 5")
    
}

let result;
let marks  = 60; 

if (marks>40) {
   
    result = "pass"
}else{
 
    result = "fail"

}

result = marks>40 ? "pass" : "fail"


console.log(result,"result")

// my-name  //kebab case
// my_name  //snake case
// myName //camel case    ** most important

// MyName //pascal case


// for loop

for (i=0;i<10;i++) {

    if (i%2===0) {
 console.log( i)
    }

    for (j=0;j<5;j++) {
        console.log(j)
    }


} 


for (i=0;i<5;i++) {
    let star = "*"   

    for (j=0;j<i;j++) { 1
            star = star + "*"    // *  
    }

    console.log(star)
}


let a =1
 
// while  (a>0) {
//     console.log(a, ' is greater than 0')
//     a++
// }





console.log("event handling")

 const apple = document.getElementById("myh1")
 const pa = document.getElementById("para")
 const btn = document.getElementById("click")
 const plus = document.getElementById("plus")
 const resetbtn = document.getElementById("reset")
 const minus = document.getElementById("minus")
 const inputtext = document.getElementById("text")
 const errormsg = document.getElementById("errormsg")





function handleClick(){

    pa.innerText = 'bfdhfcwebfjchbjfc wehgfbvwugefgwhv'
 btn.style.background = "black"
 console.log(fullName,"input ko value")

 }


 function hover (){
//  alert("hello world")
  apple.innerText = "changed"
 apple.style.color = "red"

 }
let countMessage = document.getElementById("count")


let count = 0

function increase () {
    count++
   countMessage.innerText = count
}

function decrease() {
    count--
    countMessage.innerText = count
}


function reset () {
    count = 0
    countMessage.innerText = count
}

// event listener
plus.addEventListener ('mouseover',increase);
resetbtn.addEventListener ('click',reset)
minus.addEventListener ('mouseover', (e) =>{
    console.log(e,"event")
    count--
    countMessage.innerText = count
})



inputtext.addEventListener('keypress',(e)=> {
    console.log(e.target.value,"key is pressed")
    apple.innerText = e.target.value
  
})





function handleSubmit () {
     const fullName = document.getElementById("fullName").value
     const password = document.getElementById("password").value

     if(fullName.length===fullName || password.length<8 ) {
        alert ("validation failed")
        fullName.innerText = "validation failed"
     }
     else{
        alert ("submitted ")

    
     }

}
 
 
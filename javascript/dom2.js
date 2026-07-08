console.log("hellooo")


const title = document.getElementById('myH1')
title.style.color = "red"
title.style.textAlign = "center"


const fruits = ["apple","kiwi",'coconut']

const paragraph = document.getElementsByClassName('para')
console.log(paragraph.length)


for (i=0;i<paragraph.length;i++) {
        paragraph[i].style.color = "red"

}

// paragraph[paragraph.length-1].style.color = "blue"

const btn = document.getElementsByTagName('span')
const button = document.getElementsByTagName('button')
button[0].innerText = "button changed from dom"



for(i=0;i<btn.length;i++) {

    if (i%2===0) {

        btn[i].style.backgroundColor = "blue"
    }
    else{
        btn[i].style.backgroundColor = "red"

    }

}


const divkoparagraph = document.querySelector('.card .para')
divkoparagraph.style.color = "green"
divkoparagraph.innerText = 'changed from dom' 
console.log(divkoparagraph)


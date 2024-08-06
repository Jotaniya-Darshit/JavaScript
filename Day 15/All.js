let btn = document.getElementById("insert")
btn.addEventListener("click", function(){
    let div = document.getElementById("div")
    let h1 = document.createElement("h1")
    h1.innerText = "Darshit Jotaniya"
    div.appendChild(h1)
})
let btn1 = document.getElementById("green")
btn1.addEventListener("click", function(){
    document.querySelector("h1").style.color = "green"
    document.querySelector("h2").style.color = "green"
    document.querySelector("h3").style.color = "green"
    document.querySelector("h4").style.color = "green"
    document.querySelector("h5").style.color = "green"
    document.querySelector("h6").style.color = "green"
})
let btn2 = document.getElementById("red")
btn2.addEventListener("click", function(){
    document.querySelector("h1").style.color = "red"
    document.querySelector("h2").style.color = "red"
    document.querySelector("h3").style.color = "red"
    document.querySelector("h4").style.color = "red"
    document.querySelector("h5").style.color = "red"
    document.querySelector("h6").style.color = "red"
})
let btn3 = document.getElementById("blue")
btn3.addEventListener("click", function(){
    document.querySelector("h1").style.color = "blue"
    document.querySelector("h2").style.color = "blue"
    document.querySelector("h3").style.color = "blue"
    document.querySelector("h4").style.color = "blue"
    document.querySelector("h5").style.color = "blue"
    document.querySelector("h6").style.color = "blue"
})
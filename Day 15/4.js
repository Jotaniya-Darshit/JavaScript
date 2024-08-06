let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    let elements = document.getElementsByClassName("green")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "green"
    }
})
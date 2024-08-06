let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    let elements = document.getElementsByClassName("blue")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue"
    }
})
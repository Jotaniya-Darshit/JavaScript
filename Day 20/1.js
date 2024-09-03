let btn = document.getElementById("add")
btn.addEventListener("click", ()=>{
    let element = document.createElement("li")
    element.innerText = document.getElementById("name").value
    document.getElementById("list").append(element);
    document.getElementById("name").value = "";
})

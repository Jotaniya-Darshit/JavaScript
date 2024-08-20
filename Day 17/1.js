fetch('https://fakestoreapi.com/products')
.then((res) => {
    return res.json()
})
.then((res) => {
    console.log(res)
    display(res)
})
.catch((err)=>{
    console.log(err)
})
function display(data){
    let div = document.getElementById("container")

    data.forEach((element) => {

        let div2 = document.createElement("div")
        div.appendChild(div2)
        let h6 = document.createElement('h1')
        h6.innerHTML = element.category

        let img = document.createElement("img")
        img.src = element.image
        div2.appendChild(img,h6)
   })
}
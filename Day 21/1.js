localStorage.setItem("Name","Darshit")
localStorage.setItem("Surename","Jotaniya")

console.log(localStorage.getItem("Name"));
console.log(localStorage.getItem("Surename"));

localStorage.removeItem("Surename");

localStorage.clear()

let obj = {
    subject : "JavaScript",
    subtopic : "LocalStorage"
}

localStorage.setItem("obj",JSON.stringify(obj))
let data = JSON.parse(localStorage.getItem("obj"))
console.log(data);

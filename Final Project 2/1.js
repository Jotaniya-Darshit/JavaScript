let task = document.getElementById("task");
let duedate = document.getElementById("date");
let status = document.getElementById("status");
let editId  = null;
function addData(event){
event.preventDefault()

let existingData = JSON.parse(localStorage.getItem("Task Cart")) || [];
if(editId){
        existingData.map((data) => {
        if(data.id == editId) 
        {
            data.task = task.value,
            data.duedate = duedate.value,
            data.status = status.value
        }
        else
        {
            data
        }
        })
        editId = null
    document.getElementById("subBtn").value = "Submit"
}
else
{
        let obj = 
        {
            id : Date.now(),
            task : task.value,
            duedate : duedate.value,
            status : status.value
        }
        existingData.push(obj)
}
    localStorage.setItem("Task Cart",JSON.stringify(existingData))
    task.value = ""
    duedate.value = ""
    status.value = ""
    getData();
}
function getData(){
    let tbody = document.getElementById("tbody")
    tbody.innerHTML=""
    
    let allData = JSON.parse(localStorage.getItem("Task Cart")) || [];    
    
    for(let i = 0; i<allData.length ; i++){
        
        let row = tbody.insertRow();
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);

        cell0.innerText = allData[i].task
        cell1.innerText = allData[i].duedate
        cell2.innerText = allData[i].status

        cell3.innerHTML=`<button class="deleteBtn" data-id="${allData[i].id}">Delete</button>`
        cell4.innerHTML=`<button class="editBtn" data-id="${allData[i].id}">Edit</button>`
    }

    let deleteBtns= document.querySelectorAll(".deleteBtn");

deleteBtns.forEach((btn) => {
btn.addEventListener("click", () => {
let allData=JSON.parse(localStorage.getItem("Task Cart"));
let btnId=btn.getAttribute("data-id");
console.log(allData);

let remainingData = allData.filter((data) => data.id != btnId)
console.log(remainingData);
localStorage.setItem("Task Cart",JSON.stringify(remainingData));
getData()
})
})
let editBtn = document.querySelectorAll(".editBtn")
editBtn.forEach((btn) => {
btn.addEventListener("click", ()=>{
    let addData= JSON.parse(localStorage.getItem("student")) || [];
    let btnId = btn.getAttribute("data-id");
    let singleData = allData.find((data) => data.id == btnId)

    task.value = singleData.task
    duedate.value = singleData.duedate
    status.value = singleData.status

    editId = btnId;

    document.getElementById("subBtn").value = "Update Task"
})
})
}
getData();
let name1 = document.getElementById("name")
let subject = document.getElementById("subject")
function adddata(event){
   event.preventDefault()
   let existdata = JSON.parse(localStorage.getItem("student")) || []
   let obj = {
    id:Date.now(),
    name1 : name1.value,
    subject : subject.value
   }
   existdata.push(obj)
   localStorage.setItem("student",JSON.stringify(existdata))
   name1.value=""
   subject.value=""
   getdata()
}
function getdata()
{
   let tbody = document.getElementById("tbody")
   tbody.innerHTML = "";
   let alldata = JSON.parse(localStorage.getItem("student")) || [];
   for(let i=0;i<alldata.length;i++)
      {
         let row = tbody.insertRow();
         let cell0 = row.insertCell(0);
         let cell1 = row.insertCell(1);
         let cell2 = row.insertCell(2);
         let cell3 = row.insertCell(3);
         let cell4 = row.insertCell(4);

         cell0.innerText = alldata[i].id
         cell1.innerText = alldata[i].name1
         cell2.innerText = alldata[i].subject

         cell3.innerHTML=`<button class="deleteBtn" data-id="${all[i].id}">Delete</button>`
         cell4.innerHTML=`<button class="editBtn" data-id="${all[i].id}">Edit</button>`
         
         let deleteBtns= document.querySelectorAll(".deleteBtn");

         deleteBtns.forEach((btn)=>{
         btn.addEventListener("click", () => {
         let allData=JSON.parse(localStorage.getItem("student"));
         let btnId=btn.getAttribute("data-id");
         console.log(allData);
            
         let remainingData = alldata.filter((data) => data.id != btnId)
         console.log(remainingData);
         localStorage.setItem("student",JSON.stringify(remainingData));
         getdata();
         })
      })

      let editBtn = document.querySelectorAll(".editBtn")
       editBtn.forEach((btn) => {
        btn.addEventListener("click", ()=>{
            let addata= JSON.parse(localStorage.getItem("student")) || [];
            let btnId = btn.getAttribute("data-id");
            let singleData = alldata.find((data) => data.id == btnId)

            name1.value = singleData.name1
            subject.value = singleData.subject

            editId = btnId;

            document.getElementById("submit").value = "Update"
         })
       })

      }
}
document.addEventListener("DOMContentLoaded",() => {
        console.log("Document loaded succesfully")
        
        setTimeout(()=>{
        document.getElementById("head1").textContent ="This Statement is print after 3 sec."
    },3000)
    let count=0
    let interval= setInterval(()=>{
       
            count++
            document.getElementById("head2").textContent=count
        
      
    },1000)
    let ms2 = document.getElementById("m1");
    let ms1 = document.getElementById("ms-1");
            document.getElementById("btn").addEventListener("click", () => {
                ms1.style.display = "block";
                clearInterval(interval);
            });

        window.addEventListener("click",(e)=>{
            if(e.target == ms2){
                ms1.style.display = "none";
            }
        })
    })
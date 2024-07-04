let a = document.getElementById("in1").value;
let b = document.getElementById("in2").value;
if(a == "" && b == ""){
    document.getElementById("ans").innerHTML = "Enter the values";
}else{
    const gstRate = 18;
    const sgstRate = 9;
    const serviceTax = 50; 
    let initialTotalCost = +a + +b;
    let gstAmount = (initialTotalCost * gstRate) / 100;
    let amountAfterGST = initialTotalCost - gstAmount;
    let sgstAmount = (amountAfterGST * sgstRate) / 100;
    let amountAfterSGST = amountAfterGST - sgstAmount;
    let finalCost = amountAfterSGST - serviceTax;
    document.getElementById("ans").innerHTML = finalCost;
}
let unit = document.getElementById("unit").value
unit = parseInt(unit)
if (unit <= 100) 
    {
    bill = unit * 1; 
    } 
    else if (unit <= 200) 
    {
    bill = 100 + ((unit - 100) * 2); 
    } 
    else 
    {
    bill = 100 + 200 + ((unit - 200) * 3);
    }
console.log(bill)
document.getElementById("ans").innerHTML = "Your Total Amount = " + bill
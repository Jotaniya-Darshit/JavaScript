let PA = document.getElementById("PA").value;
let ROT = document.getElementById("ROT").value;
let T = document.getElementById("T").value;

let SI = (PA * ROT * T) / 100;
let total = +PA + +SI

document.getElementById("SI").innerHTML = "Simple Interest = " + SI
document.getElementById("To").innerHTML = "Total Amount = " + total
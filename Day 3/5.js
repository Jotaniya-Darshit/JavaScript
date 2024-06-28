let a = document.getElementById("in1").value
let b = document.getElementById("in2").value
let c = document.getElementById("in3").value
let d = document.getElementById("in4").value
let com = (+a == +b && +c == +d)
document.getElementById("ans").innerHTML = com
console.log(com)
let age = document.getElementById("in1").value
let license = true;

let ans = (age >= 18) && license;
document.getElementById('ans').innerHTML = "Answer = " + ans;
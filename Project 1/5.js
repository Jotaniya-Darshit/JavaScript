let F = document.getElementById("First").value
let S = document.getElementById("Second").value
let T = document.getElementById("Third").value
let Fo = document.getElementById("Fourth").value
let Fi = document.getElementById("Fifth").value

let Ans = (+F + +S + +T + +Fo + +Fi)*2

document.getElementById("ans").innerHTML = "Answer = " + Ans
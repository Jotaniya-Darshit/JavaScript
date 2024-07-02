let S = document.getElementById("S").value
let B = document.getElementById("B").value
let PF = document.getElementById("PF").value
let Ins = document.getElementById("Ins").value
let Int = document.getElementById("Int").value

let Ans = (+S + +B - +PF - +Ins - +Int)

document.getElementById("ans").innerHTML = "Answer = " + Ans
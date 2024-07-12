let num = document.getElementById("num").value
num = parseInt(num)
let sum = 0
let i = 0
while(i <= num)
    {
        sum = sum + i
        i++
    }
console.log(sum)
document.write(`<center>
    <h1>Answer =  ${sum}</h1>
</center>`)
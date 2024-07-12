let num = document.getElementById("num").value
num = parseInt(num)
let fact = 1
let i = 1
while(i <= num)
    {
        fact *= i
        i++
    }
console.log(fact)
document.write(`<center>
    <h1>Answer =  ${fact}</h1>
</center>`)
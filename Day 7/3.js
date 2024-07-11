let num = document.getElementById("num").value

num = parseInt(num)

for(let i = 1; i <= 10; i++)
{   
    let ans = num * i;
    document.write(`<center><h1>${num} * ${i} = ${ans}</h1></center>`)
    console.log(ans)
}
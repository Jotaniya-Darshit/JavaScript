let num = document.getElementById("num").value
num = parseInt(num)
for(let i = 0; i <= num; i++)
{
    if(i % 2 == 0)
    {
        console.log(i)
        document.write(`<center><h1>${i}</center></h1>`)
    }
}
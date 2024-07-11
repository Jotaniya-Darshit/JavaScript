let str = document.getElementById("str").value
let ans = ""

for(let i = str.length-1 ; i >= 0; i--)
{
    ans += str[i]
}
console.log(ans)
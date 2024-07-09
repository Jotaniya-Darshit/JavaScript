let num = document.getElementById("num").value

num = parseInt(num)

if(num == "")
{
    console.log("Please Enter Number")
    document.getElementById("ans").innerHTML = "Please Enter Number"
}
else
{
    if(num % 2 == 0)
        {
            console.log(num + " is Even")
            document.getElementById("ans").innerHTML = num + " is Even"
        }
        else
        {
            console.log(num + " is Odd")
            document.getElementById("ans").innerHTML = num + " is Odd"
        }
}
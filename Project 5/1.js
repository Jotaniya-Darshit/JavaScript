let num = document.getElementById("num").value

num = parseInt(num)


if(num == "")
{
    console.log("Please Enter Number")
    document.getElementById("ans").innerHTML = "Please Enter Number"
}
else
{
    if(num < 0)
        {
            console.log(num + " is Negative")
            document.getElementById("ans").innerHTML = num + " is Negative"
        }
        else if(num == 0)
        {
            console.log(num + " is Zero")
            document.getElementById("ans").innerHTML = num + " is Zero"
        }
        else
        {
            console.log(num + " is Positive")
            document.getElementById("ans").innerHTML = num + " is Positive"
        }
}
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value
let num3 = document.getElementById("num3").value

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if(num1 == "" || num2 == "" || num3 == "") 
{
    console.log("Please Enter Number")
    document.getElementById("ans").innerHTML = "Please Enter Number"
}
else
{
    if(num1 > num2 && num1 > num3)
        {
            console.log(num1 + " is Largest Number")
            document.getElementById("ans").innerHTML = num1 + " is Largest Number"
        }
        else if (num2 > num1 && num2 > num3)
        {
            console.log(num2 + " is Largest Number")
            document.getElementById("ans").innerHTML = num2 + " is Largest Number"
        }
        else
        {
            console.log(num3 + " is Largest Number")
            document.getElementById("ans").innerHTML = num3 + " is Largest Number"
        }
}
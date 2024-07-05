let num = document.getElementById("num").value
num = parseInt(num)
if(num == "")
    {
        document.getElementById("ans").innerHTML = "!!!!!! Please Enter Number !!!!!!"
    }
    else
    {
        if(num <= 10)
        {
            console.log("The number is less than 10.")
        }
        else if(num >= 10 && num <= 20)
        {
            console.log("The number is between 10 and 20.")
        }
        else if(num >= 21 && num <= 30)
        {
            console.log("The number is between 20 and 30.")
        }
        else
        {
            console.log("The number is greater than 30.")
        }
    }
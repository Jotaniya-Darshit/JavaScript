let age = document.getElementById("age").value
age = parseInt(age)
if(age == "")
    {
        document.getElementById("ans").innerHTML = "!!!!!! Please Enter Age !!!!!!"
    }
    else
    {
        if(age <= 12)
        {
            console.log("You Are Child")
        }
        else if(age >= 13 && age <= 19)
        {
            console.log("You Are Teenager")
        }
        else if(age >= 20 && age <= 59)
        {
            console.log("You Are Adult")
        }
        else
        {
            console.log("You Are Senior")
        }
    }
let age = document.getElementById("age").value

age = parseInt(age)

    if(age == "")
        {   
            console.log("Please Enter Age")
            document.getElementById("ans").innerHTML = "!!!!!! Please Enter Age !!!!!!"
        }
        else
        {
            if(age <= 12)
            {
                console.log("You Are Child")
                document.getElementById("ans").innerHTML = "You Are Child"
            }
            else if(age >= 13 && age <= 19)
            {
                console.log("You Are Teenager")
                document.getElementById("ans").innerHTML = "You Are Teenager"
            }
            else if(age >= 20 && age <= 59)
            {
                console.log("You Are Adult")
                document.getElementById("ans").innerHTML = "You Are Adult"
            }
            else
            {
                console.log("You Are Senior")
                document.getElementById("ans").innerHTML = "You Are Senior"
            }
        }

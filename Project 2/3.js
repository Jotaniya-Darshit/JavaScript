let marks = document.getElementById("marks").value
    if(marks == "")
        {
            document.getElementById("ans").innerHTML = "Please Enter Value"
        } 
        else
        {
        if(marks >= 90)
            {
                document.getElementById("ans").innerHTML = "A"
            }
            else if(marks <= 89 && marks >= 70)
                {
                    document.getElementById("ans").innerHTML = "B"
                }
            else if(marks <= 69 && marks >= 60)
                {
                    document.getElementById("ans").innerHTML = "C"
                }
            else if(marks <= 59 && marks >= 25)
                {
                    document.getElementById("ans").innerHTML = "D"
                }
            else if(marks <= 24  && marks >= 0)
                {
                    document.getElementById("ans").innerHTML = "!!!! Fail !!!!"
                }
            else
            {
                document.getElementById("ans").innerHTML = "INVALID INPUT"
            }
}
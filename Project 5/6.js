let marks = document.getElementById("marks").value

marks = parseInt(marks)


    if(marks == "")
        {   
            console.log("Please Enter Mark")
            document.getElementById("ans").innerHTML = "Please Enter Mark"
        } 
        else
        {
        if(marks >= 90)
            {
                console.log("Excellent")
                document.getElementById("ans").innerHTML = "Excellent"
            }
            else if(marks <= 89 && marks >= 70)
                {
                    console.log("Good")
                    document.getElementById("ans").innerHTML = "Good"
                }
            else if(marks <= 69 && marks >= 50)
                {
                    console.log("Fair")
                    document.getElementById("ans").innerHTML = "Fair"
                }
            else if(marks <= 49 && marks >= 0)
                {
                    console.log("Poor")
                    document.getElementById("ans").innerHTML = "Poor"
                }
            else
            {
                console.log("Excellent")
                document.getElementById("ans").innerHTML = "INVALID INPUT"
            }
}

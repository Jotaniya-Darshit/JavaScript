let year = document.getElementById("year").value

year = parseInt(year)

if(year == "")
{
    console.log("Please Enter Year")
    document.getElementById("ans").innerHTML = "Please Enter Year"
}
else
{
    if(year % 4 == 0)
    {
        console.log("It's Leap Year")
        document.getElementById("ans").innerHTML = "It's Leap Year"
    }
    else
    {
        console.log("It is not a Leap Year")
        document.getElementById("ans").innerHTML = "It is not a Leap Year" 
    }
}
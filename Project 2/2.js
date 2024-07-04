let a = document.getElementById("in1").value
let b = document.getElementById("in2").value
let c = document.getElementById("in3").value
let d = document.getElementById("in4").value
let e = document.getElementById("in5").value

a = parseInt(a)
b = parseInt(b)
c = parseInt(c)
d = parseInt(d)
e = parseInt(e)

if(a == "" && b == "" && c == ""  && d == ""  && e == "")
    {
        document.getElementById("ans").innerHTML = "Please Enter Value"
    }
    else
    {
        if (a >= b && a >= c && a >= d && a >= e) 
            {
            console.log("Max = First Number "+a)
            } 
        else if (b >= a && b >= c && b >= d && b >= e) 
            {
                console.log("Max = Second Number "+b)
            } 
        else if (c >= a && c >= b && c >= d && c >= e) 
            {
                console.log("Max = Third Number "+c)
            } 
        else if (d >= a && d >= b && d >= c && d >= e) 
            {
                console.log("Max = Fourth Number "+d)
            } 
        else 
        {
            console.log("Max = Fifth Number "+e)
        }
    }
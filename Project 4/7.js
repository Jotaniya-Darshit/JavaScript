let x = document.getElementById("x").value
let y = document.getElementById("y").value

x = parseInt(x)
y = parseInt(y)

if (x !== 0 && y !== 0) 
    {
        console.log("Both are non-zero");
    }
    else 
    {
        console.log("Either x is zero or y is zero")
    }

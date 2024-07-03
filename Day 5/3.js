    let a = document.getElementById("f1").value
    let b = document.getElementById("f2").value
    let c = document.getElementById("f3").value

    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)

    if(a == "" && b == "" && c == "")
        {
            document.getElementById("ans").innerHTML = ""
        }
        else
        {
        if(a > b)
            {

            if(a > c)
                {
            document.getElementById("ans").innerHTML = a + "Largest Number"
        }else{
            document.getElementById("ans").innerHTML = c + "Largest Number"
        }


        }else{

        if(b > c){
            document.getElementById("ans").innerHTML = b + "Largest Number"
        }else{
            document.getElementById("ans").innerHTML = c + "Largest Number"
        }
        }
        }
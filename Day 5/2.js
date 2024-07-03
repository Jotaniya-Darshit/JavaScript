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
        if(a < b)
            {
            if(a < c)
                {
                    document.getElementById("ans").innerHTML = a + "Smallest Number"
                }else
                {
                    document.getElementById("ans").innerHTML = c + "Smallest Number"
                }
            }
            else
            {
                if(b < c)
                    {
                        document.getElementById("ans").innerHTML = b + "Smallest Number"
                    }
                    else
                    {
                        document.getElementById("ans").innerHTML = c + "Smallest Number"
                    }
            }
        }
let marks = document.getElementById("marks").value
    if(marks == ""){
        document.getElementById("ans").innerHTML = "input toh likh!"
    } else{
        if(marks < 60){
            document.getElementById("ans").innerHTML = "Fail!"
        }else if(marks < 70){
            document.getElementById("ans").innerHTML = "D"
        }else if(marks < 80){
            document.getElementById("ans").innerHTML = "C"
        }else if(marks < 90){
            document.getElementById("ans").innerHTML = "B"
        }else if(marks <= 100){
            document.getElementById("ans").innerHTML = "A"
        }else{
            document.getElementById("ans").innerHTML = "INVALID INPUT"
        }
}
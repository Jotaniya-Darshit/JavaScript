let a="abc";
let password = document.getElementById("in1").value;
if(password == ""){
    document.getElementById("ans").innerHTML = "Enter your password"
}else{
    if(password == a){
    document.getElementById("ans").innerHTML = "Correct";
    }
    else{
        document.getElementById("ans").innerHTML = "Incorrect";
    }
    
    }
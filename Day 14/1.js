document.getElementById("form").addEventListener("submit",function(){
    var inputfields = document.getElementsByClassName('form');
    for (var i = 0; i < inputfields.length; i++) {
        if (inputfields[i].value === "") {
            alert("Please fill all fields");
            isValid = false;
            break;
        }
    }
    const password=document.getElementById('Password').value
    if(password.length<=7){
        alert("Please enter atleast 8 word password")
    }
    const Confirmpassword=document.getElementById('Confirmpassword').value
    if(password != Confirmpassword){
        alert("Password & Confirm password are not same")
    }
})
let a=document.getElementById("in1").value
if(a == "")
    {
    document.getElementById("ans").innerHTML="Enter Value"
}
else if(a>0){
    document.getElementById("ans").innerHTML=a +" is Positive"
}
else if(a == 0){
    document.getElementById("ans").innerHTML=a +" is Zero"
} 
else{
    document.getElementById("ans").innerHTML=a +" is  Negative"
}
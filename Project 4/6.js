let tem = document.getElementById("tem").value
if(tem < 0)
{
    console.log("Temperature is too cold")
}
else if(tem >= 0 && tem <= 100)
{
    console.log("Temperature is normal")
}
else if(tem > 100)
{
    console.log("Temperature is too hot")    
}
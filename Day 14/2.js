let arr = [1,2,3,4,5,6]
let x = arr.reduce((accumulator,el)=>{
    if(el % 2 != 0)
    {
        return accumulator + el
    }
    return accumulator
},0) 
console.log("Sum of Odd element from ",arr," = ",x)
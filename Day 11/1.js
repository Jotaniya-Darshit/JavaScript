let arr = [1,2,3,4,5,6]
let addition = arr.map((element)=>{
    return element + element
})
console.log("Original = ",arr," After Addition = ",addition)
let multiplication = arr.map((element)=>{
    return element * 10
})
console.log("Original = ",arr," After Multiplication = ",multiplication)
let subtraction = arr.map((element)=>{
    return 7 - element
})
console.log("Original = ",arr," After Subtraction = ",subtraction)
let even = arr.filter((element)=>{
    return element % 2 == 0
})
console.log("Original = ",arr,"After filter = ",even)
let odd = arr.filter((element)=>{
    return element % 2 != 0
})
console.log("Original = ",arr,"After filter = ",odd)
let every = arr.forEach((element)=>{
    console.log(element)
})
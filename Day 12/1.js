let arr = [1,2,3,4,5,6]
let arr1 = [1,-2,3,-4,5,-6]
let age = [12,18,13,19,14,20]
let str = ["saurabh","darshit","khushal"]
let newArr = arr.map((item, index) => {
    return item * item
})
console.log("Original array = ",arr,"After Square = ",newArr)
let newArr2 = arr.filter((element)=>{
    return element % 2 === 0
})
console.log("Original array = ",arr,"After filter = ",newArr2)
let newArr3 = str.map((el)=>{
    return el.toUpperCase()
})
console.log("Original array = ",str,"After Capitlized = ",newArr3)
let newArr4 = arr1.filter((el)=>{
    return el>0
})
console.log("Original array = ",arr1,"After filter = ",newArr4)
let newArr5 = age.filter((el)=>{
    return el>17
})
console.log("Original Age Array = ",age,"After filter = ",newArr5)
let newArr6 = arr.reduce((accumulator,el)=>{
    return accumulator * el
},1)
console.log("Original array = ",arr,"After filter = ",newArr6)
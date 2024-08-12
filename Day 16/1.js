let arr = [1,2,3,4,5,6]
let every = arr.forEach((element)=>{
    console.log(element)
})

let subtraction = arr.map((element)=>{
    return 7 - element
})
console.log("Original = ",arr," After Subtraction = ",subtraction)
let even = arr.filter((element)=>{
    return element % 2 == 0
})
console.log("Original = ",arr,"After filter = ",even)
let newArr6 = arr.reduce((accumulator,el)=>{
    return accumulator * el
},1)
console.log("Original array = ",arr,"Factorial Of array = ",newArr6)
let arr1 = [1]
arr1.push(2)
console.log(arr1)
arr1.push(3)
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.shift()
console.log(arr1)
arr1.unshift(1)
console.log(arr1)
arr1.splice(0,1)
console.log(arr1)
let arr2 = ["Darshit", "Khushal", "Kartik", "Ayush", "Rutul"];
let a = arr2.slice(-3, -1);
console.log(a);
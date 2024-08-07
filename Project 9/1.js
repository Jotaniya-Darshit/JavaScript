let string = ["assignment", "problem", "media", "upload"]
let x = string.filter((string,index)=>{
    return string.startsWith('a') || string.endsWith('a')
})
console.log(x);
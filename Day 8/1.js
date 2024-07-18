let a=512
function productOfDigits(n) {
let product = 1;
while (n > 0) {
  let digit = n % 10;
  product *= digit;
  n = Math.floor(n / 10);
}
return product;
}
console.log(productOfDigits(a))
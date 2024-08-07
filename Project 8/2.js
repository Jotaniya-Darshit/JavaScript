//2. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a
//discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0 in javascript
var purchaseAmount = 220;
var discount;

if (purchaseAmount >= 100) 
    {
        discount = 20;
    } 
    else if (purchaseAmount >= 50) 
        {
            discount = 10;
        } 
        else 
        {
            discount = 0;
        }
console.log("Discount = " + discount + "%");
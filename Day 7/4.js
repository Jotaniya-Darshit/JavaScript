let number1 = parseInt(document.getElementById("num").value);
let primeNumbers = [];

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= parseInt(num / 2); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= number1; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}

document.getElementById("ans").innerHTML = primeNumbers.join(", ");
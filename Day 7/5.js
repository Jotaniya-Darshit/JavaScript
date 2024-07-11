let number = parseInt(document.getElementById("num").value);
let count = 0;

while (number > 0) {
    number = parseInt(number / 10);
    count++;
}

document.getElementById("ans").innerHTML = `Number of digits: ${count}`;
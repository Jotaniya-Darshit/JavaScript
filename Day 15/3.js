function squareNumber(num) {
    try {
        if (typeof num !== "number") {
            throw new TypeError("Input must be a number");
        }
        return num * num;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

console.log(squareNumber(4));
console.error(squareNumber("four"));
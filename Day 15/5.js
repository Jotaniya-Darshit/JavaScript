function accessArrayElement(arr, index) {
    try {
        if (index < 0 || index >= arr.length) {
            throw new RangeError("Index out of bounds");
        }
        console.log(`Element at index ${index}: ${arr[index]}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

const numbers = [1, 2, 3, 4, 5];
accessArrayElement(numbers, 2); 
accessArrayElement(numbers, 5); 
accessArrayElement(numbers, -1); 
    try {
        let num1=10
        let num2=0
        if (num2 === 0 || num1 === 0) 
            {
                throw new Error("One number is zero");
            }
        let result = num1 / num2;
        console.log("Result: ${result}");
    } catch (error) {
        console.error("Error:", error.message);
    }
for (let i = 1; i <= 100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0) 
            {
            console.log("FizzBuzz");
            document.write(`<center><h1>FizzBuzz</h1></center>`)
            } 
        else if (i % 3 === 0) 
            {
            console.log("Fizz")
            document.write(`<center><h1>Fizz</h1></center>`)
            } 
        else if (i % 5 === 0) 
            {
            console.log("Buzz")
            document.write(`<center><h1>Buzz</h1></center>`)
            }
        else 
        {
            console.log(i);
            document.write(`<center><h1>${i}</h1></center>`)

        }
    }
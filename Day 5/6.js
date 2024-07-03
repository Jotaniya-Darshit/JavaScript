
    let income = document.getElementById('income').value;
    let tax = 0;
    
    if(income == "")
        {
            document.getElementById("ans").innerHTML = "Please Enter Amount"
        }
    else
    {
        if (income <= 10000) {
            tax = income * 0.05;
        } else if (income <= 20000) {
            tax = 10000 * 0.05 + (income - 10000) * 0.1;
        } else if (income <= 30000) {
            tax = 10000 * 0.05 + 10000 * 0.1 + (income - 20000) * 0.15;
        } else if (income <= 40000) {
            tax = 10000 * 0.05 + 10000 * 0.1 + 10000 * 0.15 + (income - 30000) * 0.2;
        } else {
            tax = 10000 * 0.05 + 10000 * 0.1 + 10000 * 0.15 + 10000 * 0.2 + (income - 40000) * 0.25;
        }
    }
    document.getElementById("ans").innerHTML = "Answer = " + tax
// 1. Write a program that calculates the ticket price based on age with the following conditions: 
// age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay 
// a ticket price of 20, age over 60 play a ticket price of 15 in javascript.
function calculateTicketPrice(age) 
{
    let ticketPrice;
    if (age < 12) 
        {
        ticketPrice = 5;
        } 
        else if (age < 18) 
            {
            ticketPrice = 10;
            } 
            else if (age < 60) 
                {
                ticketPrice = 20;
                } 
                else 
                    {
                    ticketPrice = 15;
                    }
                    return ticketPrice;
}
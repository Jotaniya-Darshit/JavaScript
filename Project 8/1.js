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


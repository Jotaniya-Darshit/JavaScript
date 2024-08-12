function logVariableValue(variableName) 
{
    try 
    {
        console.log(eval(variableName));
    } catch (e) 
    {
        console.error(`Error accessing variable '${variableName}': ${e.name} - ${e.message}`);
    }
}

let age = 19
let name = "Darshit"

logVariableValue("age") 
logVariableValue("name") 
logVariableValue("mark")
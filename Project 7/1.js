let name = "Developer"
find(name)
function find(name) 
{   
    let c=0
    for (let i = 0; i < name.length; i++) 
        {
            if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u' || name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U')
            {
               c++ 
            }        
        }
    console.log("Vowel ",name," in = ",c)
}
//Default Constructor
class car
    {
        constructor()
            {
                this.model = "Mastang 1969"
                this.color = "black"
            }
        print()
            {
                console.log("This is " + this.model + " " + this.color + " and it's my car");
            }
    }
let obj = new car();
obj.print();
//Parameterized Constructor
class animal {
    constructor(type,breed,name) 
    {
        this.type = type
        this.breed = breed
        this.name = name    
    }
    print()
        {
            console.log(this.name + " is a my pet and it is " + this.breed + " " + this.type)
        }
}
let obj2 = new animal("Dog","German Shepherd","buddy")
obj2.print()
//Copy Constructor
class person 
    {
    constructor(name,age,city) 
        {
            this.name = name
            this.age = age
            this.city = city
        }
    copy()
        {
            return new person(this.name,this.age,this.city);        
        }
    detail()
    {
        console.log(this.name + " is " + this.age + " years old and he lives in "+this.city)
    }
}
let obj3 = new person("John",25,"New York")
obj3.detail()
//OR 
class Login
    {
        constructor(username,age)
            {
                this.username = username || "Guest"
                this.age = age >= 18 ? age : "You are under 18"
            }
    }
let obj4 = new Login()
console.log(obj4.username)
console.log(obj4.age)
//Parameterized Constructor = In this constructor we pass value using parameter that is called Parameterized Constructor 
class product
    {
        constructor(id,name,price)
            {
                this.id = id
                this.name = name
                this.price = price
            }
        prize()
            {
                console.log(`This is product'ID ${this.id} and it's name is ${this.name} and it's cost ${this.price} with shipping charge`)
                console.log();   
            }
    }
let obj = new product("6867165","boAt Airdopes 161 Elite ANC","1399")
obj.prize()
//Default Constructor =  In this constructor we pass value in constructor that is called Default Constructor
class bike
    {
        constructor()
            {
                this.model = "OLA Roadster"
                this.color = "White"
                this.price = "1,50,000"
                this.speed = "122 KM/H"
            }
        Detail()
            {
                console.log("This is " +this.model+". it is " + this.color + "color. it's top speed is " + this.speed+ " and it's price is RS "+this.price)
                console.log();
                
            }
    }
let obj1 = new bike()
obj1.Detail()
//Copy Constructor = In this constructor we pass value using copy method that is called Default Constructor
class student
{
    constructor(GR,name,course,faculty)
    {
        this.GR = GR 
        this.name = name
        this.course = course 
        this.faculty = faculty
    }   
    copy()
    {
        return new student (this.GR,this.name,this.course,this.faculty)
    }
}
let obj3 = new student ("7282","Jotaniya Darshit","Full Stack","Jitendarsir")
let obj4 = obj3.copy()

console.log(obj3.GR);
console.log(obj3.name);
console.log(obj3.course);
console.log(obj3.faculty);
console.log(obj4.GR);
console.log(obj4.name);
console.log(obj4.course);
console.log(obj4.faculty);
console.log();

//Conditional Constructor = if any user not pass any parameter then constructor's choose it's or value 

class person
{
    constructor(name,age,city)
    {
            this.name = name || "Jotaniya Darshit"
            this.age = age >=18 ? age : "You are under 18"
            this.city = city || "Not entered"
    }
}
let obj5 = new person()
console.log(obj5.name)
console.log(obj5.age)
console.log(obj5.city)
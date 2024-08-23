// Simple Inheritence = Child class can access it's Parent Class value
class Car
{
    constructor(name)
    {
        this.name = name
    }
    detail()
    {
        return console.log(`${this.name}`)
    }
}
class Model extends Car
{
    constructor(name,model)
    {
        super(name)
        this.model = model
    }
    detail()
    {
        return console.log(`${this.name},${this.breed}`)
    }
}
let obj = new Model ("Ford","Mastang 1969")
console.log("Company name = "+ obj.name)
console.log("Model name = "+obj.model)
console.log();
//Multilevel Inheritence = there two child class like One and Two then Two is extends One and One extend Parent class
class Company
{
    constructor(name)
    {
        this.name = name
        }
        detail()
        {
            return console.log(`${this.name}`)
        }
}       
class Employee1 extends Company
{
    constructor(name,work)
        {
            super(name)
            this.work = work
        }
    detail()
        {
            return console.log(`It is ${this.name} and It is ${this.work}`)    
        }
}
class Employee2 extends Employee1
{
    constructor(name,work,department)
    {
        super(name)
        this.work = work
        this.department = department
    }
    detail()
    {
        return console.log(`${this.name},${this.work},${this.department}`)    
    }
}
let obj1 = new Employee2("R&W","Student","Fullstack")
console.log("Company name = "+ obj1.name)
console.log("Work name = "+obj1.work)
console.log("Department name = "+obj1.department)
console.log()
//hirarchical Inheritence = there are two or more than two child class can access it's Parent class value
class Animal
{
    constructor(sound)
    {
        this.sound = sound
        }
        speak()
        {
            return console.log(`${this.name} is making sound`)
        }
}
class Dog extends Animal
{
    constructor(sound,name,breed)
    {
        super(sound)
        this.name = name
        this.breed = breed
    }
    bark()
    {
        return console.log(`${this.sound},${this.name},${this.breed}`)
    }
}
class Cat extends Animal
{
    constructor(sound,name,breed)
    {
        super(sound)
        this.name = name
        this.breed = breed
    }
    Meow()
    {
        return console.log(`${this.name},${this.name},${this.breed}`)
    }
}
let obj4 = new Dog("Bhau Bhau","Kartik","German Shepherd")
console.log("DOG");
console.log("Sound = "+obj4.sound);
console.log("Name = "+obj4.name);
console.log("Breed = "+obj4.breed);
console.log();
let obj5 = new Cat("Meow Meow","Aashish","Siamese cat")
console.log("CAT");
console.log("Sound = "+obj5.sound);
console.log("Name = "+obj5.name);
console.log("Breed = "+obj5.breed);

// Polymorphism = Method Riding 

class Animal2 {
    speak() 
    {
        console.log(`${this.name} is making sound`)
    }
}
class Dog1 extends Animal2 {
    speak() 
    {
        console.log(`${this.name} is barking`)
    }
}
class Cat1 extends Animal2 
{
    speak()
    {
        console.log(`${this.name} is meowing`)
    }
}
let obj6 = new Dog1("Kartik");
let obj7 = new Cat1("Aashish");
obj6.speak();
obj7.speak();

//Abstraction = Hide Data From User

//Encapsulation = Object is covered by Other object


// CLass Inheritance
/*
    Two Type class
    1. Parent Class
    2. Child Class

*/

/*
    Key Concepts and Keywords
    superclass (parent class): The class whose properties and methods are inherited.

    subclass (child class): The class that inherits from the parent class.

    extends: The keyword used to create a subclass.

    super: The keyword used to access and call functions on an object's parent.
*/


// Define Super Class 

class Animal {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} and ${this.age} age and  makes a sound`)
    }
}

const animal = new Animal('Generic Animal',30);
animal.speak();

const person = new Animal('Ovi', 23);
person.speak()



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




// Defien Subclass

class Dogs extends Animal {
    constructor (name,age, breed){
        super(name,age); // Call the parent class constructor
        this.breed = breed;

    }
    speak(){
        console.log(`${this.name}, age ${this.age} the ${this.breed}, barks`)
    }
}


const myDog = new Dogs('Max', 20, 'Golden Retriever');
myDog.speak()
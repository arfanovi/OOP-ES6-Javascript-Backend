

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


// Override Methods 
// In this sub class can override methods from the parent class to specific functionality

class Cat extends Animal {
    speak(){
        console.log(`${this.name} , age${this.age} meows.`)
    }
}

const myCat = new Cat('Whiskers', 20);
myCat.speak()


// Add New Methods and Properties 

class Bird extends Animal {
    constructor(name, canFly){
        super(name);
        this.canFly = canFly;
    }

    fly(){
        if (this.canFly){
            console.log(`${this.name} is flying.`);
        } else {
            console.log(`${this.name} , can't fly.`)
        }
    }
}

const myBird = new Bird('Robin', true);
// myBird.speak();
myBird.fly()



// Multi-Level inheritance

class Mammal extends Animal {
    constructor(name, hasFur){
        super(name);
        this.hasFur = hasFur;
    }
}


class Dog extends Mammal {
    constructor(name, breed) {
        super(name, true);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks`);
    }
}

const myDogs = Dogs('Beagle', 21);
myBird.speak();
console.log(myDogs.hasFur);


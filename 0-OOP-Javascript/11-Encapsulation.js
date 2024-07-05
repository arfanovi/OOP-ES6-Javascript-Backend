 /*

 class Person {
    #address
    // # is private 
    constructor(name, age,address){
        this.name = name;
        this.age = age;
        this.#address = address;
        
    }
    aboutPerson() {
        this.#aboutAddress();
        console.log(`This name is ${this.name} and age is ${this.age}`)
    }

    aboutAddress(){
        this.#aboutAddress()
        console.log(`${this.address} is Home`)
    }
 }




 let p1 = new Person("Ovi", 25, 'Dhaka');
//  console.log(p1.address)
 p1.aboutPerson()
 p1.aboutAddress()
 


//  Private Method 

*/

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    aboutPerson() {
        this.#aboutAddress();
        console.log(`This name is ${this.name} and age is ${this.age}`);
    }
    getAddress(){
        return this.address
    }

    #aboutAddress() {
        console.log(`${this.address} is Home`);
    }
}

let p1 = new Person("Ovi", 25, 'Dhaka');
p1.aboutPerson();
p1.getAddress()

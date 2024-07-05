
// Normal Class Without Inheritance apply and Scroll Down 
class Computer {
    constructor(name, model){
        this.name = name;
        this.model = model;
    }
    aboutComputer() {
        console.log(`this computer name is ${this.name} , this model is ${this.model}`)
    }
}

let dell = new Computer("Dell", "Dell2020");
console.log(dell)

class Hp {
    constructor(name, model, warrenty){
        this.name = name;
        this.model = model;
        this.warrenty = warrenty;
    }
    aboutComputer() {
        console.log(`this computer name is ${this.name} , and the model is ${this.model} `)
    }
    aboutWrrenty(){
        console.log(`${this.name} provider ${this.warrenty} year of warenty`)
    }
}
let hp = new Hp("Hp4", 'hp24',2024)
hp.aboutComputer();
hp.aboutWrrenty()




// Apply Inheritance ()


class Mobile {
    constructor(name, model){
        this.name = name;
        this.model = model;
    }
    aboutPhone() {
        console.log(`this computer name is ${this.name} , this model is ${this.model}`)
    }
}

class Details extends Mobile {
    constructor(name, model , warrenty){
        super(name, model);
        this.warrenty = warrenty;
    }
    aboutPhoneWrrenty() {
        console.log(`${this.name}, provider and model is ${this.model} year of warenty ${this.warrenty}`)
    }

}

let phones = new Details("Vivo","y53",3);
// console.log(phones);j


phones.aboutPhone();
phones.aboutPhoneWrrenty() 

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
    usePhone(value){
        console.log(`${(this.warrenty * 12 * 30) - (value * 30)} day use`)
    }

}

let phones = new Details("Vivo","y53",3);
// console.log(phones);
// phones.aboutPhone();
// phones.aboutPhoneWrrenty() 
phones.usePhone(2)
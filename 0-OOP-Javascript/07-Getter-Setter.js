


class Phone {
    constructor(name, price){
        this.name = name;
        this.price = price;

    }

    aboutPhone() {
        console.log(`This phone name is ${this.name} , price ${this.price}`)
    }

    get phoneName () {
        return this.name;
    }
}

const phone1 = new Phone("Vivo", "Y53");
console.log(phone1);

console.log(phone1.phoneName);
console.log(phone1)
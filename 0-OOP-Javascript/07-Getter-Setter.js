


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
    set phoneName(value) {
        this.price = value;
    }
}

const phone1 = new Phone("Vivo", "Y53");
console.log(phone1);

console.log(phone1.phoneName);
console.log(phone1)

phone1.phoneName = "Samsung";
console.log(phone1.phoneName);
console.log(phone1)


// Class Declare


class Computer {
    constructor(name, model){
        this.name = name;
        this.model = model;

    }
    aboutComputer() {
        console.log(`This name is ${this.name}, model is ${this.model}`)
    }
}


const dell = new Computer("dell" , 'Dk37');
console.log(dell);
dell.aboutComputer()
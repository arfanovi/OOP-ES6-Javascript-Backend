

const Computer = {
    name: "",
    model: "",
    aboutComputer(){
        console.log(`this name is ${this.name}, this model is ${this.model}`)
    }
}

// let dell = new Computer("Dell", "Dell2020");
let dell = Object.create(Computer)
dell.name = "DELL";
dell.model = "DELL2020"
dell.aboutComputer()
console.log(dell)


let hp = Object.create(Computer);
hp.name = "HP";
hp.model = "HP2024";
hp.aboutComputer()
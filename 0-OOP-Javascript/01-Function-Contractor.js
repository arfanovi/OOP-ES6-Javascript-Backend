/*
const obj = {};
obj.name = "OOP Ovi";
obj.playlist = "OOP";
console.log(obj);
*/


/*
**** Four Rules Function Constructor ***

    1. Create and empty object 
    2. Function is called this  = {}
    3. Object {} linked to the prototype 
    4. Object {} will return automatically
*/




const Computer = function (name, model) {
    this.name = name;
    this.model = model;


    this.aboutComputer = function () {
        console.log(`The computer name is ${this.name} and the model is ${this.model}`)
    }
} 
const dell = new Computer('Dell', 'Dk24');
const hp = new Computer("Hp", 'Hp309')

// console.log(dell);
// console.log(hp);

// dell.aboutComputer();
hp.aboutComputer()













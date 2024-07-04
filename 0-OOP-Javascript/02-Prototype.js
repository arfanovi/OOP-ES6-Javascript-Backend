/*
const arr = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = arr.filter(element => element% 2 ===0);

console.log(Array.prototype)
console.log(new Array)
console.log(evenNumber);

*/



/*
const Person = function (name, age) {
    this.name = name;
    this.age = age;

}


Person.prototype.aboutPerson = function() {
    console.log(`this is ${this.name} here and age is ${this.age}`)
}

const person1 = new Person('Ovi', 25)
const person2 = new Person('Arfan',35);
console.log(person1);
person2.aboutPerson()

*/



Array.prototype.filter = function() {
    let array = [];
    for(let i = 0; i < this.length; i++){
        // console.log(this[i]);
        if(this[i] % 2 === 0){
            array.push(this[i])
        }
    }
    return array;
}

console.log([2,3,4,5,6,7,8,9].filter());
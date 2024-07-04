


// * Basic While Loop 
// Ex: 1

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// This code will print numbers 0 to 4 to the console.

// Ex:2 
// Infinity 'while ' loop 

while (true){

    console.log("While");

    break;
}

// Ex:3
// While exactly two times print break statement 

let p = 0;
let count = 0;

while (true){
    if(count >=2){
        break;
    }
    console.log("Ovi")
    count++;
    p++;
}


// This Code will print "Ovi" two times and then terminate the loo using the break statement 


// Ex:4
// Array using WL 

const array = [1,2,3,4,5];
let index = 3;

while (index < array.length){
    console.log((array[index]));
    index++;
}

// This will print each element of array 

// Ex: 5
// While loop with conditional logic 

let num = 10;

while (num > 0){
    if(num % 2 ===0){
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`)
    }
    num--;
}


// Ex: 6
// While loop object Properties 
const person = {
    name: "Alice", age:24, city: "Dhaka"
}

const keys = Object.keys(person);
let k = 0;


while( k < keys.length) {
    console.log(`${keys[k]}: ${person[keys[k]]}`);
    k++;
}
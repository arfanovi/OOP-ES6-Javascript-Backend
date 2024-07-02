

// * Break down a complex structure into simpler parts 


// Basic Syntax 
    // const [variables1, variables2] = array;

    // Here, variable1 and variable2 will take the values of the first and second elements of the array, respectively.


// Examples 
const fruits = ['apple','banana','cherry'];
const [first,second,third] = fruits;
console.log(first)
console.log(second)
console.log(third)


// Examples : Default Value 
const colors = ['red','black'];
const [primary, secondary, tertiary = 'blue'] = colors;

console.log(primary)
console.log(secondary)
console.log(tertiary)



// Examples 
let countries = ["Bangladesh", "India", "China","Pakistan"];
let [a,,,b] = countries;
console.log(a,b)


// Examples : Nested

const nestedArray = [1, [2,3],4];
const [One, [Two, Three], four] = nestedArray;

console.log(One)
console.log(Two)
console.log(Three)
console.log(four)

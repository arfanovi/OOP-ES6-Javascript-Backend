

    function someThing(...x) {
        console.log(x)
    }

    someThing(1,2,3,4,5,6,7,8,9,10)
// ... is rest parameter 



function someTime(...y){
    console.log(y)
}

const arr = [1,2,3,4,5]
someTime(arr)



// The numbers in the array and log the index of each elememnt

function array(...z) {
    z.forEach((item, index) => {
        console.log(`Index ${index} : ${item}`)
    });
};

const arrInput = [1,2,3,4,5];

array(...arrInput)


const arrays = [6,7,8,9,10]
const index = arrInput.indexOf(4);

if (index !== -1){
    console.log(`Index of element 4: ${index}`)
} else {
    console.log("Opps")
}


// Index of 4 which is element ?

const arrInputs = [1,2,3,4,5,6,7,8,9,10];
const elememntIndexOf4 = arrInputs[4];
console.log(`${elememntIndexOf4}`)


// using ES6


const numberOfArray = [50,60,70,80,90,100];

const {4: elementAtIndex4} = numberOfArray;
console.log(`${elementAtIndex4}`)


/*
Concepts Covered:
Array Declaration: The array arr is initialized with values [1, 2, 3, 4, 5].

Destructuring Assignment: Using ES6 destructuring syntax to directly extract and assign values from arrays (or objects).

Index Access: Accessing array elements by their index (arr[4] retrieves the element 5).

Logging: Using console.log to output information to the console.j

*/
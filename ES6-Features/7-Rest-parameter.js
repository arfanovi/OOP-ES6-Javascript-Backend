

// Using  rest parameter a function can be called with any number og arguments.
// Rest parameter is prefixed with three DOMStringList(...)


/*
function show(...number){
    let sum = 0;
    for (let i of number){
        sum += i;
    }
    console.log("Sum =" + sum);
}
const inputRestNumber = show(1,2,3,4,5);
show()

*/



// another Program 
/*
function Calculation(...numbers){
    let add = 0;
    for(let i of numbers){
        add += i;
    }
    console.log(add)

}

Calculation(1,2,3,4,5)

*/



// More Add Parameter 

function Calculation(a,b,...numbers){
    let sum = 0;
    let mul = a * b;
    for(let i of numbers){
        sum += i;
    }
    console.log(mul)
    console.log(sum)
}

Calculation(5,5,10,10)
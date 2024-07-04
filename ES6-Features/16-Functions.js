/*
*****************************************************
        E     S      6     
    * Simple Function
    * Parameterized Functions
    * Rest Parameters
    * Returning Function
    * Anonymous Function
    * Parameterized Anonymous Function
    * Arrow Function
    * The Function Constructor

****************************************************
*/


// Just Simple Function
function myName(){
    var p = 5;
    var q = 5;
    var r = p + q;
    console.log(r)
}
myName();




// * Parameterized Functions

function mulParm(m,n){
    let mul = m * n;
    return mul;
}

const data = mulParm(10,10);
console.log(data)
mulParm();




// * Loop For Map Values and Keys 

let myName = new Map();
myName.set('Key1' ,'Bangladesh')
myName.set('Key2' ,'Ind')
myName.set('Key3' ,'China')
myName.set('Key4' ,'Bhutan')
myName.set('Key5' ,'Nepal')


// Value Check 
for (let myValue of myName.values()){
    console.log(myValue)
}


// Keys Check 
for (let myKey of myName.keys()){
    console.log(myKey)
}




// myName.values();
// myName.keys()
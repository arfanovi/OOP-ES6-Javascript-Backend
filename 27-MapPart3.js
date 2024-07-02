

/*
        ES6 Map 
    * delete(key)
    * get(key)
    * clear()
    * hash(key) 
    * 
*/ 



let myName = new Map();
myName.set('Key1' ,'Bangladesh')
myName.set('Key2' ,'Ind')
myName.set('Key3' ,'China')
myName.set('Key4' ,'Bhutan')
myName.set('Key5' ,'Nepal')




// clear Method
myName.clear()

// Delete Method 
myName.delete("Key1")

// Get Method 

console.log(myName.get("4"));


// Has method 
if (myName.has("Key1")){
    console.log("Yes")
} else {
    console.log("No")
}

for(let myKey of myName.keys()){
    console.log(myKey)
}
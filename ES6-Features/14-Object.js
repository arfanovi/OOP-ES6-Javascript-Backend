



/*
In Javascript an object is a collection of properties , where  each property is a key-value pair .

Object are fundamentals to javascript and are use to store various keyed collections and more complex entities 


*/


// Using object literals:
    const person = {
        name: "Jon",
        age: "30",
        job: "Developer"
    }

// // Using the new Object() syntax (less common)
//     const person2 = new Object();
//     person.name = "Jhon",
//     person.age = 30,
//     person.job = "developer"



    // Accessing Properties
    console.log(person["job"]);

    // Adding new property
    person.city = "Nedw York";
    console.log(person)

    // Removing Properties
    delete person.job;
    console.log(person)

    // Iterating Over Properties
    //  using a `for..in ` loop
    for(let key in person){
        console.log(`${key}: ${person[key]}`)
    } 



    // Examples with Objects 



// 1. Album

const Album = {
    title: "Arafn Ovi",
    artist: "Shihab",
    releaseYear: 2000,
    tracks: [
        {trackNumber : 1, title: "Come together", duration: "4:20"},
        {trackNumber: 2, title:"Something", duration: "5"}
    ],
    getTrackList () {
        return this.tracks.map(track => `
            ${track.trackNumber}.${track.title}.${track.duration}
            `). join("\n")
    }
}

console.log(Album.getTrackList());




// Shopping Cart

const shoppingCart = {
    items: [
        { name: "Laptop", price: 899.99 },
        { name: "Mouse", price: 19.99 }
    ],
    addItem(item) {
        this.items.push(item);
    },
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
};
shoppingCart.addItem({ name: "Keyboard", price: 49.99 });
console.log(shoppingCart.getTotal()); // Outputs: 969.97

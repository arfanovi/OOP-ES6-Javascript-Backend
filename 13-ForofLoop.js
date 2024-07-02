
/*
let nameArray = ['Ovi','Mehedi','Tanvir','Masum','Sahin'];

for(let oneName of nameArray){
    console.log(oneName);

}

*/

// Ex:2 
// Creating an Object:
const studentClubs = {
    "Music Club" : ['Arfan','Ovi'],
    "Sports Club" : ['Masum','Ribon'],
    "Art Club" : ["Mow","Shimu"] 
};


// Iterating Over the Object:
for(const club in studentClubs){
    console.log(`${club}: Members - ${studentClubs[club].join(" & ")}`)
}



// "Music Club" is Key and ["Arfan","Ovi"] is a value 

// for...in loop to go through each key (club name) in the 'studentsClubs' object


// Club will taken on the value of each key in the object , one at a time   
    // in the first loop club will be "Music club"

// studentClubs[club] accesses the value (array of members) for the current key (club)

// Join(",") turns the array of members into a single string , with each member separated by a comma and a space 


// Another eay **************************

    const sportClub = {
        "Football": ["Ovi", "Shihab"],
        "Cricket": ["Ribon","Mehedi"],
        "Voliball": ["kanan","Kader"]
    };

    for (const club in sportClub){
        const members = sportClub[club];
        const memberString = members.join(", ");
        console.log(`$club}: Members - ${memberString}`);
    }
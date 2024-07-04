

const Computer = function(name,model) {
    this.name = name;
    this.model = model;
}

Computer.aboutComputer = function(){
    console.log("This is Computer")
}

const dell = new Computer("dell", "dk37");
console.log(dell)

Computer.aboutComputer();
console.log(dell)


// Static Apply 
class Student {
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    aboutStudent() {
        console.log(`This is ${this.name} id is ${this.id}`)
    }
    static departmentStudent = function () {
        console.log("Department is CSE")
    }
}


const student1 = new Student("Ovi", 201002487);
console.log(student1)

student1.aboutStudent();
Student.departmentStudent();
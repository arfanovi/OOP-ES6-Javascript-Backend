

class Student {
    constructor(name,department){
        this.name = name;
        this.department = department;
    }

    aboutStudent() {
        console.log(`This name is ${this.name} and department is ${this.department}`)
    }
}



class Student1 extends Student {
    constructor(name, department, section){
        super(name,department);
        this.section = section;
    }
    aboutStudent() {
        console.log(`This name is ${this.name} and department is ${this.department} and section is ${this.section}`)
    }
}


const s1 = new Student1("Ovi" , "CSE", "A1");
s1.aboutStudent()


// Polymorphism work Override or Bohurupi Properties
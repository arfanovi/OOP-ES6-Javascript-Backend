// ES6 Class Constructor 
/*
    // * Constructor hocce classser nijer method/function 
    //    * Class Object Toiri holei Constructor auto call hoi 
        // * Onno function er motoi constructor kaj kore
        // * but constructor return korte parena
        
*/


class MyClass{
    constructor(a,b){
        console.log(a+b)
    }
};

new MyClass(10,20);



class salary {
    constructor(a,b){
        this.firstSalary = a
        this.secondSalary = b
    }
    add() {
        let result = this.firstSalary + this.secondSalary;
        console.log(result)
    }
}



let obj = new salary(100,500)
obj.add()
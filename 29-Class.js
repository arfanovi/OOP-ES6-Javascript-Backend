

/***********************************
        Why Class ?

    *Before ES6 , it was hard to create a class in JS
    *But it is Class Keyword using 
*/

class myClass{
    myClass1(){
        console.log('Inside Function Class1')
    }
    myClass2() {
        console.log("inside Function Class2")
    }
    myClass3() {
        console.log("inside Function Class3")
    }
    myClass4() {
        console.log("Inside Function Class4")
    }
}

let obj  = new myClass();
obj.myClass1()
obj.myClass2()





// Class Parameter Passing

class myName{
    myClass1(name){
        console.log(name)
    }
    myClass2(name) {
        console.log(name)
    }
    myClass3(name) {
        console.log(name)
    }
    myClass4() {
        console.log(name)
    }
}

let names  = new myName();
names.myClass1('Arfan')
names.myClass2('Hosen')
names.myClass3('Ovi')




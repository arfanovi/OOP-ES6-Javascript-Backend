

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
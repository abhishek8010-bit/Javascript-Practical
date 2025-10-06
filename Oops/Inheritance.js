
class Person{
    constructor(){
        console.log("solved");
    }

     Work() {
        console.log("Work");
    }

    Eat(){
        console.log("Eat");
    }

    Sleep(){
        console.log("Sleep");
    }

}


class Doctor{
    work(){
        console.log("work");
    }
}

class Engineer{
    work(){
        console.log("work");
    }
}

let obj = new Person();
let obj1 = new Doctor();
let obj2 = new Engineer();
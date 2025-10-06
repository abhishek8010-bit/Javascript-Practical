
// let obj = {
//     name : "abhishek",
//     course : "java",

// }
// function print () {
//     console.log("hello");
// }



// let obj = {
//     name : "abhishek",
//     course : "Java",

//     print(){
//         console.log("hello");
//     }
// }



// Object.__proto__ = reference(Object);


let emp = {
    
    callTax(){
        console.log("tax rate is 10%");
    } ,
    print(){
        console.log("print tax")
    }
}
let emp1 = {
    name : "abhishek",
    salary : 50000
}
let emp2 = {
    name : "yash",
    salary : 40000
}
emp1.__proto__ = emp;
emp2.__proto__ = emp
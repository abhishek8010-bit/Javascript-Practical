// //Student Exam Registration System
// //Tasks: 1.Register Student 2.Select Exam Subjects 3.Pay Exam Fees 4.Get Registration Confirmation 

// function registerStudent(callback){
//     setTimeout(()=>{
//         console.log("Student Registered");
//         callback();
//     },2000);
// }

// function selectExamSubjects(callback){
//     setTimeout(()=>{
//         console.log("Exam Subject Selected");
//         callback();
//     },2000);
// }

// function payExamFees(callback){
//     setTimeout(()=>{
//         console.log("Exam Fees Paid");
//         callback();
//     },2000);
// }

// function getRegistrationConfirmation(callback){
//     setTimeout(()=>{
//         console.log("Registration Confirmed");
//         callback();
//     },2000);
// }

// //callback Hell
// registerStudent(()=>{
//     selectExamSubjects(()=>{
//         payExamFees(()=>{
//             getRegistrationConfirmation(()=>{
//                 console.log("All Tasks Completed:");
//             })
//         })
//     })
// })



//Shopping Cart
//Tasks: 1.add to cart 2.pricing 3.discount 4.payment 5.confirmation

function addToCart(callback){
    setTimeout(()=>{
        console.log("Product added");
        callback();
    },2000);
}

function pricing(callback){
    setTimeout(()=>{
        console.log("Product price");
        callback();
    },2000);
}

function discount(callback){
    setTimeout(()=>{
        console.log("Product discount");
        callback();
    },2000);
}

function payment(callback){
    setTimeout(()=>{
        console.log("Product payment");
        callback();
    },2000);
}

function confirmation(callback){
    setTimeout(()=>{
        console.log("Product confirmed");
        callback();
    },2000);
}

//callBack Hell

addToCart(()=>{
    pricing(()=>{
        discount(()=>{
            payment(()=>{
                confirmation(()=>{
                    console.log("All Tasks Done:")
                })
            })
        })
    })
})
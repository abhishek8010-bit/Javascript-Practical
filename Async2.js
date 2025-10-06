//Promises 

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data"+ dataId)
//             resolve("success");
//             // reject("some error");
//         },5000);
//     });
// }
// const data = getData(101);



// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         // resolve("success");
//         reject("network error");
//     });
// }
// const promise = getPromise();

// promise.then((res)=>{
//     console.log("promise fulfilled:", res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected:", err);
// });


//promise chaining

// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 101");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 102");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data...");
// asyncFun().then(()=>{
//     console.log("fetching data..");
//     asyncFun1().then((res)=>{
//         console.log(res);
//     })
// })



//get data by promise chaining

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data" + dataId)
            resolve("success");
            // reject("some error");
        }, 3000);
    });
}

console.log("getting data..");
getData(101).then(() => {
    console.log("getting data..");
    return getData(102);
})
    .then(() => {
        console.log("getting data..");
        return getData(103);
    })
    .then(() => {
        console.log("getting data..");
        return getData(104);
    })
    .then(() => {
        console.log("getting data..");
        return getData(105);
    })
    .then((res)=>{
        console.log(res);
    })
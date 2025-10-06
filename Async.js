//Sync
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");



//Async
// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three");
// },4000);
// console.log("four");


//callback hell 
// function getData(dataId){
//     console.log("Data" + dataId);
// }

function getData(dataId, getNextData){
   setTimeout(()=>{
     console.log("Data" + dataId);
     if(getNextData){
        getNextData();
     }
   },2000); 
}

//getData(101),getData(102)

console.log("getting Data..");
getData(101,()=>{
    console.log("getting Data..");
    getData(102,()=>{
        console.log("getting Data..");
        getData(103,()=>{
            console.log("getting Data..");
        });
    });
});
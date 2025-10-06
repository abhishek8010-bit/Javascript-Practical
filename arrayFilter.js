
let arr = [1,2,3,4,5];
// let newarr = arr.filter(x => x % 2 == 0)    //first way
// console.log(newarr);

let newarr = arr.filter(function(item){        //second way 
    if(item % 2 == 0){
        return item;
    }
});
console.log(newarr);
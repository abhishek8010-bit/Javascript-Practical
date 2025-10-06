
let arr = [1,2,3,4,5];
// let newarr = arr.map(x => x % 2 == 0);
// console.log(newarr); 
let newarr =arr.map(function(item){
    if(item % 2 == 0){
        return item;
    }
});
console.log(newarr);
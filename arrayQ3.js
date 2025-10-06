
// let arr = [1,2,3,4,5];
// let arr1 = arr.map(x => x * x);
// console.log(arr1);

// let arr = [2,5,8,10,14];
// let arr1 = arr.filter(x => x > 10);
// console.log(arr1);

// let arr = [32,10,45,2,15];
// let arr1 = arr.sort((a,b) => a - b);
// console.log(arr1);

// let arr = [1,2,3,4,5];
// let arr1 = arr.map(x => x + x );
// console.log(arr1);


// let arr = [12,19,24,35];
// let arr1 = arr.every(x => x % 2 == 0);   //every element case
// console.log(arr1);


// let arr = [[1,2],[3,4],[5,6]];
// let arr1 = arr.flat();
// console.log(arr1);


// let arr = ["a","b","a","c","b","a"];
// let count = [];
// arr.forEach((item) =>{
//     count[item] = (count[item]  || 0) + 1;
// });
// console.log(count);


// let arr = [10, 4, 20, 15, 5];
// let largest = arr[0];
// let secondLargest = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > largest){
//         secondLargest = largest;
//         largest = arr[i];
//         }
//         else if(arr[i]>secondLargest && arr[i]!=largest){
//             secondLargest = arr[i];
//         }
// }
// console.log(secondLargest);



let arr = [12, 19, 24, 35];
let arr1 = arr.some(x => x > 20);   // at least one case
console.log(arr1);
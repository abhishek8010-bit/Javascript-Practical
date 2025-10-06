let x = [11,44,22,33,44,55,66,44,77,44,88]
//console.log(x.indexOf(44))
//console.log(x.lastIndexOf(44))
z = [];
for(i=0;i< x.length;i++){
    if(x[i] == 44){
     //z = i
     z.push(i)
     
    } 
   
}
console.log(z)
//console.time();
console.log(x.includes(44))
//console.timeEnd();
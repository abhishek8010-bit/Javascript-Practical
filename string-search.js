let mystring="hello how are hello you hello"
console.log(mystring.indexOf('hello'))
console.log(mystring.lastIndexOf('hello'))
console.log(mystring.split(' '))
let x=mystring.split(' ')
let z=[];
for(let i=0;i<x.length;i++){
    if(x[i]=='hello'){
        z.push(i)
    }
    
}
console.log(z)
let mystring="hello how are you hello"
let mystring2="Welcome"
console.log(mystring)
console.log(mystring.length)
console.log(mystring.padEnd(20,'-'))
console.log(mystring.padStart(20,'-'))
console.log(mystring.padStart(20,'-').padEnd(23,'-'))
console.log(mystring.concat(mystring2))
console.log(mystring.split(' '))
console.log(mystring.replace("hello","Hellos"))
console.log(mystring.replaceAll("hello","Hellos"))
console.log(mystring.slice(4,9))//index position


let mystring1="  hello world  "
console.log(mystring1)
console.log(mystring1.length)
console.log(mystring1.trimStart())
console.log(mystring1.trimEnd())
console.log(mystring1.trim())



let str = "abhishek chauhan";             //remove all space 
let str1 = str.replace(/\s+/g , "");
console.log(str1);
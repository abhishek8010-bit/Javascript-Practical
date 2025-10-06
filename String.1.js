let userInput = prompt("enter the usename");
let userName = userInput.trim().toLocaleLowerCase().replace(/\s+/g,"");
let special = "@";

console.log(special.concat(userName));

var str = "madam";
var str1 = str;
let rev = "";
for(let i=str.length - 1; i>=0; i--){
    rev += str.charAt(i);
}
console.log(str1);
console.log(rev);
if(rev == str1 ){
   console.log("palindrone");
}
else{
    console.log("not palindrone");
}
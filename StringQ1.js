
var sentence = "abhishek chauhan is a good boy";
var count = 0;

for(let i=0; i<sentence.length; i++){
    if(sentence.charAt(i) == " "){
        count++;
    }
}
console.log(count);
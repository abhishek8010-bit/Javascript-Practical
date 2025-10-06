
// function sum(){
//     console.log("hello");
// }
// sum();


// function vowelCount(string){
//     let vowel = 0;
//     let consonant = 0;
//     for(let i=0; i<string.length; i++){
//         if(string[i] =='a' || string[i] =='e' || string[i]=="i" || string[i]=="o" || string[i]=="u"){ 
//         vowel++;
//     }
//     else{
//         consonant++;
//     }
//     }
//     console.log("vowel:" + vowel);
//     console.log("consto:" +consonant);

// }
// vowelCount("hello");

function countVowelsAndConsonants (word){
   let vowels = "aeiouAEIOU";
   let vowelCount = 0;
   let consonantCount = 0;

   for (let i = 0; i < word.length; i++){
    let char = word[i];

    if(char >= 'a'  && char <= 'z' || char >='A' && char <='Z'){
        if(vowels.includes(char)){
            vowelCount++
        } else {
            consonantCount++;
        }
    }
   } 

   console.log("Vowels: " , vowelCount);
   console.log("Consonants: " , consonantCount);
}


countVowelsAndConsonants("helloA");
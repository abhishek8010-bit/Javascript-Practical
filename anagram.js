// anagram is a word formed by rearranging the letter of another word using all the letter exactly once.
//same letter, same count but reaaranged in differnt.


let anagram = (str1,str2) =>{
    let s1 = str1.toLowerCase().split('').sort().join('');
    let s2 = str2.toLowerCase().split('').sort().join('');
    if(s1 === s2){
        console.log("this is an anagram");
    }
    else{
        console.log("this is not an anagram");
    }
}

anagram("listen","silent");
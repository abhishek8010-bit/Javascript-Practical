//right triangle
for(let row=1; row<=5; row++){
    var stars="";
    for(let space=1; space<=5-row; space++){
       stars +=" "; 
    }
    for(let cols=1; cols<=row; cols++){
        stars +="*";
    }
    console.log(stars);
}
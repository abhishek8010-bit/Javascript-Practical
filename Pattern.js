//Left Triangle
for(var i =1; i<=5; i++){            
    let stars = "";
    for(var j=1; j<=i; j++){
        stars +="*";
    }
    console.log(stars);
}

//inverted left triangle
for(var i =5; i>=1; i--){
    let stars = "";
    for(var j=1; j<=i; j++){
        stars +="*";
    }
    console.log(stars);
}


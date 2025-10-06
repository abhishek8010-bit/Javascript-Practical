// Hollow left triangle

for(let row=1; row<=5; row++){
    var stars="";
    for(let cols=1; cols<=row; cols++){
        if(cols==1||cols==row||row==5){
            stars +="*  ";
        }
        else{
            stars +="   ";
        }
    }
    console.log(stars);
}
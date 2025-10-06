
// let div = document.querySelector(".box");
// console.log(div);
// console.log(div.getAttribute("class"));
// console.log(div.setAttribute("class","set"));


const btn = document.createElement("button");
console.log(btn);
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let div = document.querySelector("div");
console.log(div);

//div.append(btn);        //start of node 
//div.prepend(btn);       //end of node 
//div.after(btn);           //after the object
div.before(btn);          //before the object  

btn.remove();            //remove button

const showFun = () => {
    const myInput = document.querySelector("#input");
    const inputValue = myInput.value;
    console.log(myInput); 

    const li = document.createElement("li");
    li.textContent = inputValue;

    document.querySelector("#output").appendChild(li);
    myInput.value = "";
}
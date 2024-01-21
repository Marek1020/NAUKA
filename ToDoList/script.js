
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const result = document.querySelector(".result");


const tab = [];



const readValue = () => {
    if(input.value !== ""){
        tab.push(input.value);
        renderData(tab);
    } else{
        alert("pole jest puste");
    }
}

const renderData = (data) =>{
    clear();
 
    data.forEach((element,key)=>{
        result.innerHTML+= `<div class="row" ><div>${key+1} </div><span>${element}</span><button onclick="removeData(${key})">X</button></div>`
    })
    resetValue();

}

const removeData = (key) => {
    tab.splice(key, 1);
    clear();
    renderData(tab);
}

const clear = () => {
    result.innerHTML = "";
}

const resetValue = () => {
    input.value = "";
}

button.addEventListener("click",()=>{
    readValue();
});
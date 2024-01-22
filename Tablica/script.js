const content = document.querySelector(".input");
const sort = document.querySelector("#sort");
const flip = document.querySelector("#flip");
const del = document.querySelector("#del");
const plus = document.querySelector("#plus");
const values = document.querySelector(".content");

const tab = [];

const readValue = () =>{
    tab.push(content.value);
    printTab(tab);
}

const printTab = (data) => {
    clear();
    data.forEach((element, key) =>{
        //values.innerHTML +=`<div class="content" ><div>${key+1} </div><span>${element}</span><button onclick="rmData(${key}")>X</button></div>`
        values.innerHTML += `<div class="content" ><div>${key+1} </div><span>${element}</span><button onclick="rmData(${key})">X</button><br/></div>`;

    });
    resetValue();
}

const rmData = (key) => {
    tab.splice(key, 1);
    clear();
    printTab(tab);
}

plus.addEventListener("click", () => {
    readValue();
})

flip.addEventListener("click", () =>{
    tab.reverse();
    clear();
    printTab(tab);

})

sort.addEventListener("click", () =>{
    tab.sort();
    clear();
    printTab(tab);
})

del.addEventListener("click", () =>{
    tab.pop();
    clear();
    printTab(tab);

})


const clear = () =>{
    values.innerHTML= "";
}

const resetValue = () => {
    content.value= "";
}
const getData = async () =>{
    const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/c/?format=json");
    const data = await response.json();
    console.log(data);
    return data;

}

const container = document.querySelector(".content");


const printData = async () =>{
    const data = await getData();
    console.log(data);
    if(data){
    const rates = data[0]?.rates || "";
    rates.forEach((rate, key)=>{
        console.log(rate);

    
        
        if(key %2 === 0){
            container.innerHTML += `<span><b>${key} : ${rate?.currency || "brak"} : ${rate.code} : ${rate.mid}<br/></b></span>`
        }else{
            container.innerHTML += `<span>${key} : ${rate.currency} : ${rate.code} : ${rate.mid}<br/></span>`
        }

    });
    }else {
        console.log("brak daty");

        return
    }
    
    
}



const main = () =>{
    printData();
}

main();

// console.log(data[0].rates[0].code);

// const info = data[0].rates

// console.log(info);

// info.forEach(function (item){
    
// });






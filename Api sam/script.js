const apiUrl = "https://api.publicapis.org/entries";
const content = document.querySelector(".content");
const cat = document.querySelector(".cat");
const option = document.querySelector("option");

const categories = [];


const clear = () => {
    content.innerHTML = "";
}

const renderValues = (rates) => {
    rates.forEach(rate => {
        categories.push(rate.Category);
        content.innerHTML += ` <div class="values"><span>${rate.API} - ${rate.Category} - ${rate.Description} - <a href="${rate.Link}">Link do strony</a></span></div>`


    });
}


const renderCategory = () => {
    const output = [...new Set(categories)];
    output.forEach(item => {
        cat.innerHTML += `<option value="${item}">${item}</option>`
    })
}


const renderApi = (url) => {

    fetch(url).then(response => {
            if (!response.ok) {
                alert(`błąd połączenia ${response.status}`);
            }
            return response.json();
        })
        .then(data => {

            const rates = data.entries;

            renderValues(rates);

            renderCategory();


        })
        .catch(error => {
            console.error('błąd pobierania z api', error);
        })
}

renderApi(apiUrl);

cat.addEventListener("change", (event) => {
    clear();
    console.log(event.target.value);
    const apiUrl = "https://api.publicapis.org/entries" + "?category=" + event.target.value;
    console.log(apiUrl);
    renderApi(apiUrl);

})
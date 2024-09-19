// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const table = document.querySelector("#multiplication-operations")
const span = document.querySelector("#multiplication-title span")
// Eventos
multiplicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const number = Number(numberInput.value);
    const multiplicator = Number(multiplicatorInput.value);
    
    if(!number || !multiplicator){
        return;
    }

    createResultTable(number, multiplicator);  
});

const createResultTable = (number, multiplicator) => {
    let result;
    let template;
    table.innerHTML = "";
    span.innerText = number;

    for (let i = 1; i <= multiplicator; i++) {
        result = number * i;

        template = 
        `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row")
        table.appendChild(row)
    }
}
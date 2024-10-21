//seleção 
const principalContainer = document.querySelector('#principalContainer');
const pfContainer = document.querySelector('#pfContainer');
const pjContainer = document.querySelector('#pjContainer');
const pfBtn = document.querySelector('#pfBtn');
const pjBtn = document.querySelector('#pjBtn');
const nomePf = document.querySelector('#nomePf');
const idade = document.querySelector('#idade');
const cpf = document.querySelector('#cpf');
const rendaPf = document.querySelector('#rendaPf');
const enderecoPf = document.querySelector('#enderecoPf');
const nomePj = document.querySelector('#nomePj');
const cnpj = document.querySelector('#cnpj');
const tipo = document.querySelector('#tipo');
const rendaPj = document.querySelector('#rendaPj');
const enderecoPj = document.querySelector('#enderecoPj');
const calcularPfBtn = document.querySelector('#calcularPfBtn');
const limparPfBtn = document.querySelector('#limparPfBtn');
const voltarPfBtn = document.querySelector('#voltarPfBtn');
const calcularPjBtn = document.querySelector('#calcularPjBtn');
const limparPjBtn = document.querySelector('#limparPjBtn');
const voltarPjBtn = document.querySelector('#voltarPjBtn');

//funções

function cleanInputs(actual){
    if (actual == "PF"){
        nomePf.value = "";
        idade.value = "";
        cpf.value = "";
        rendaPf.value = "";
        enderecoPf.value = "";
    }else if(actual == "PJ"){
        nomePj.value = "";
        cnpj.value = "";
        tipo.value = "";
        rendaPj.value = "";
        enderecoPj.value = "";
    }
}

function showOrHideResults(actual, next){
    if (actual == "principal" && next == "PF"){
        principalContainer.classList.toggle("hide");
        pfContainer.classList.toggle("hide");
    } else if (actual == "principal" && next == "PJ"){
        principalContainer.classList.toggle("hide");
        pjContainer.classList.toggle("hide");
    } else if (actual == "PF" && next == "principal"){
        pfContainer.classList.toggle("hide");
        principalContainer.classList.toggle("hide");
        cleanInputs("PF")
    }else if(actual == "PJ" && next == "principal"){
        pjContainer.classList.toggle("hide");
        principalContainer.classList.toggle("hide");
        cleanInputs("PJ")
    }
}

function validPfInputs(){
    return !nomePf.value || !idade.value || !cpf.value || !rendaPf.value || !enderecoPf.value;
}

function validPjInputs(){
    return !nomePj.value || !cnpj.value || !tipo.value || !rendaPj.value || !enderecoPj.value;
}

function validNumericInputs(value){
    return value.replace(/[^0-9]/g, "")
}

function validRendaInputs(value){
    return value.replace(/[^0-9,]/g, "")
}


//eventos

pfBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showOrHideResults("principal", "PF"); 
})

pjBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showOrHideResults("principal", "PJ"); 
})

limparPfBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    cleanInputs("PF");
})

limparPjBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    cleanInputs("PJ");
})

voltarPfBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    showOrHideResults("PF", "principal");
})

voltarPjBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    showOrHideResults("PJ", "principal");

    if(tipo.value != "MEI" && tipo.value != "LTDA" && tipo.value != "SS" && tipo.value != "SA"){
        alert("Tipo de empresa inválido! Permitido somente MEI, LTDA, SS e SA");
    }
})

calcularPfBtn.addEventListener('click', (event) =>{
    event.preventDefault();

    if(validPfInputs()){
        alert("Preencha todos os campos");
        return;
    }

    showOrHideResults("PF", "principal");
})

calcularPjBtn.addEventListener('click', (event) =>{
    event.preventDefault();

    if(validPjInputs()){
        alert("Preencha todos os campos");
        return;
    }

    showOrHideResults("PJ", "principal");
})

[idade,cpf, cnpj].forEach((item) => {
    item.addEventListener('input', (event) => {
        const updateValue = validNumericInputs(event.target.value);
        event.target.value = updateValue;  
    })
});

[idade,cpf, cnpj].forEach((item) => {
    item.addEventListener('input', (event) => {
      const updateValue = validRendaInputs(event.target.value);
        event.target.value = updateValue;  
    })
});
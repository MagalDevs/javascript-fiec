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
const resultPfContainer = document.querySelector('#resultPfContainer');
const resultPjContainer = document.querySelector('#resultPjContainer');
const voltarResultPfBtn = document.querySelector('#voltarResultPfBtn');
const voltarResultPjBtn = document.querySelector('#voltarResultPjBtn');
const nomePfResult = document.querySelector('#nomePfResult span');
const cpfResult = document.querySelector('#cpfResult span');
const rendaPfResult = document.querySelector('#rendaPfResult span');
const calculoPf = document.querySelector('#calculoPf span');
const nomePjResult = document.querySelector('#nomePjResult span');
const cnpjResult = document.querySelector('#cnpjResult span');
const tipoResult = document.querySelector('#tipoResult span');
const rendaPjResult = document.querySelector('#rendaPjResult span');
const calculoPj = document.querySelector('#calculoPj span');
const pfTable = document.querySelector('#pfTable');

//PF table data

const data = [
    {
        min: 0,
        max: 1400,
        renda: "0 a 1400",
        aliquota: '0%',
        aliquotaValue: 0,
        parcela: 0
    },
    {
        min: 1400,
        max: 2100,
        renda: "1400.01 a 2100",
        aliquota: '10%',
        aliquotaValue: 0.1,
        parcela: 100
    },
    {
        min: 2100,
        max: 2800,
        renda: "2100.01 a 2800",
        aliquota: '15%',
        aliquotaValue: 0.15,
        parcela: 270
    },
    {
        min: 2800,
        max: 3600,
        renda: "2800.01 a 3600",
        aliquota: '25%',
        aliquotaValue: 0.25,
        parcela: 500
    },
    {
        min: 3600,
        max: 100000000000000000000000000000000000000000,
        renda: "3600.01 a 4200",
        aliquota: '30%',
        aliquotaValue: 0.3,
        parcela: 700
    },
]

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
    }else if(actual == "PF" && next == "resultPf"){
        pfContainer.classList.toggle("hide");
        resultPfContainer.classList.toggle("hide");
    } else if(actual == "PJ" && next == "resultPj"){
        pjContainer.classList.toggle("hide");
        resultPjContainer.classList.toggle("hide");
    } else if(actual == "resultPf" && next == "principal"){
        resultPfContainer.classList.toggle("hide");
        principalContainer.classList.toggle("hide");
        cleanInputs("PF");
    } else if(actual == "resultPj" && next == "principal"){
        resultPjContainer.classList.toggle("hide");
        principalContainer.classList.toggle("hide");
        cleanInputs("PJ");
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

function createTable(data){
    data.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('tableData');

        const renda = document.createElement('p')
        renda.innerText = item.renda;

        const aliquota = document.createElement('p')
        aliquota.innerText = item.aliquota;

        const parcela = document.createElement('p')
        parcela.innerText = "R$" + item.parcela;

        div.appendChild(renda);
        div.appendChild(aliquota);
        div.appendChild(parcela);

        pfTable.appendChild(div);
    })
}

createTable(data);

async function validCpf(cpf){
    try {
        let url = `https://api.invertexto.com/v1/validator?token=15772|28zq9TbjIuNI224TKotvlBvDIFEocgT4&value=${cpf}&type=cpf`
        const response = await axios.get(url)
        if(response.data.valid){
            console.log("CPF Válido!");
            return true;
        }else{
            alert("CPF Inválido!");
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

async function validCnpj(cnpj){
    try {
        let url = `https://api.invertexto.com/v1/validator?token=15772|28zq9TbjIuNI224TKotvlBvDIFEocgT4&value=${cnpj}&type=cnpj`;
        const response = await axios.get(url)
        if(response.data.valid){
            console.log("CNPJ Válido!");
            return true;
        }else{
            alert("CNPJ Inválido!");
            return false;
        }
    } catch (error) {
        console.log(error);
    }
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

})

calcularPfBtn.addEventListener('click', async (event) =>{
    event.preventDefault();

    if(validPfInputs()){
        alert("Preencha todos os campos");
        return;
    }

    if(!await validCpf(cpf.value)){
        return;
    }

    let impostoValue;

    data.forEach((item) => {
        if(rendaPf.value >= item.min && rendaPf.value <= item.max){
            impostoValue = (rendaPf.value * item.aliquotaValue) - item.parcela;
        }
    });

    nomePfResult.innerText = nomePf.value;
    cpfResult.innerText = cpf.value;
    rendaPfResult.innerText = rendaPf.value;
    calculoPf.innerText = impostoValue

    if (impostoValue < 500) {
        calculoPf.classList.add("good")
    }else if(impostoValue >= 500 && impostoValue <= 2500){
        calculoPf.classList.add("low")
    }else{
        calculoPf.classList.add("high")
    }

    showOrHideResults("PF", "resultPf");
})

calcularPjBtn.addEventListener('click', async (event) =>{
    event.preventDefault();

    if(validPjInputs()){
        alert("Preencha todos os campos");
        return;
    }

    if(tipo.value != "MEI" && tipo.value != "LTDA" && tipo.value != "SS" && tipo.value != "SA"){
        alert("Tipo de empresa inválido! Permitido somente MEI, LTDA, SS e SA");
        return;
    }

    if(!await validCnpj(cnpj.value)){
        return;
    }

    let impostoValue = rendaPj.value * 0.1;

    nomePjResult.innerText = nomePj.value;
    cnpjResult.innerText = cnpj.value;
    tipoResult.innerText = tipo.value;
    rendaPjResult.innerText = rendaPj.value;
    calculoPj.innerText = impostoValue;

    if (impostoValue < 500) {
        calculoPj.classList.add("good")
    }else if(impostoValue >= 500 && impostoValue < 2500){
        calculoPj.classList.add("low")
    }else{
        calculoPj.classList.add("high")
    }

    showOrHideResults("PJ", "resultPj");
})

voltarResultPfBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    showOrHideResults("resultPf", "principal");
})

voltarResultPjBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    showOrHideResults("resultPj", "principal");
})

const camposNumericos = [idade, cpf, cnpj];
const camposRenda = [rendaPf, rendaPj];


camposNumericos.forEach((item) => {
    item.addEventListener('input', (event) => {
        const updateValue = validNumericInputs(event.target.value);
        event.target.value = updateValue;  
    });
});

camposRenda.forEach((item) => {
    item.addEventListener('input', (event) => {
        const updateValue = validRendaInputs(event.target.value);
        event.target.value = updateValue;  
    });
});
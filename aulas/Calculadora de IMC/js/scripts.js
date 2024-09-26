// IMC Data
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

// Seleção de elementos
const imcContainer = document.querySelector("#imcContainer")
const resultContainer = document.querySelector("#resultContainer")
const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const calcularBtn = document.querySelector("#calcularBtn")
const limparBtn = document.querySelector("#limparBtn")
const imcTable = document.querySelector("#imcTable")
const imcNumber = document.querySelector("#imcNumber span")
const imcInfo = document.querySelector("#imcInfo Span")
const voltarBtn = document.querySelector("#voltarBtn")

// Funções
function createTable(data){
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("tableData");

        const classification = document.createElement("p")
        classification.innerText = item.classification;

        const info = document.createElement("p")
        info.innerText = item.info;

        const obesity = document.createElement("p")
        obesity.innerText = item.obesity;

        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        imcTable.appendChild(div);
    });
}

function clearInputs() {
    heightInput.value = "";
    weightInput.value = "";

    imcNumber.className = "";
    imcInfo.className = "";
}

function validInput(text){
    return text.replace(/[^0-9,]/g, "")
}

function calcularIMC(height, weight) {
 return (weight / (height * height)).toFixed(1);
}

function showOrHideResult() {
  imcContainer.classList.toggle("hide")
  resultContainer.classList.toggle("hide");
}

createTable(data)

// Eventos
limparBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearInputs();
});

[heightInput, weightInput].forEach((item) => {
    item.addEventListener("input", (event) => {
        const updatedValue = validInput(event.target.value)
        event.target.value = updatedValue;
    });
});

calcularBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const height = +heightInput.value.replace(",", ".");
  const weight = +weightInput.value.replace(",", ".");

  if(!height ||!weight){
    return;
  }
  const imc = calcularIMC(height, weight);
  let info;

  data.forEach((item) => {
    if(imc >= item.min && imc <= item.max){
      info = item.info;
    }
  })

  if(!info){
    return;
  }

  imcNumber.innerText = imc;
  imcInfo.innerText = info;

  switch(info){
    case "Magreza":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Normal":
      imcNumber.classList.add("good");
      imcInfo.classList.add("good");
      break;
    case "Sobrepeso":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Obesidade":
      imcNumber.classList.add("medium");
      imcInfo.classList.add("medium");
      break;
    case "Obesidade grave":
      imcNumber.classList.add("high");
      imcInfo.classList.add("high");
      break;
  }
  showOrHideResult();
});

voltarBtn.addEventListener("click", (event) => {
  clearInputs();
  showOrHideResult();
});
//Seleção dos elementos
const container = document.querySelector(".container");
const button = document.querySelector("#qr-form button");
const input = document.querySelector("#qr-form input");
const imgQrCode = document.querySelector("#qr-code img")

button.addEventListener("click", generateQrCode);

function generateQrCode() {
    const inputValue = input.value;

    if(!inputValue){
        return;
    }

    button.innerText = "Gerando o QR code...";
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    container.classList.add("active")
}
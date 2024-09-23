//Seleção dos elementos
const container = document.querySelector(".container");
const button = document.querySelector("#qr-form button");
const input = document.querySelector("#qr-form input");
const imgQrCode = document.querySelector("#qr-code img")

button.addEventListener("click", generateQrCode);
input.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        generateQrCode();
    }
});

input.addEventListener("keyup", () => {
    if (!input.value) {
        container.classList.remove("active");
        button.innerText = "Gerar QR Code";
    }
})

function generateQrCode() {
    const inputValue = input.value;

    if(!inputValue){
        return;
    }

    button.innerText = "Gerando o QR code...";
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`; 
    imgQrCode.addEventListener("load", () => {
        container.classList.add("active")
        button.innerText = "QR code gerado com sucesso!"
    });
}
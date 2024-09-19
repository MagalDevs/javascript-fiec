const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    console.log("Cliquei no botão!");
    button.textContent = "Você clicou no botão!";
});
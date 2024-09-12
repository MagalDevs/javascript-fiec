async function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color
}

const title = document.getElementById("title");
const rodape = document.querySelector("footer");

const btnBlue = document.getElementById("Blue")
const btnGreen = document.getElementById("Green")

btnBlue.addEventListener("click",function(){
    changeBackgroundColor(title, "blue")
    changeBackgroundColor(rodape, "blue")
})
btnGreen.addEventListener("click",function(){
    changeBackgroundColor(title, "green")
    changeBackgroundColor(rodape, "green")
})
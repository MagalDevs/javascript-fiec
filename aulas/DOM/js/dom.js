/*
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);
console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("product"));
console.log(document.querySelector(".product"));
console.log(document.querySelector("#main-container"));
*/
const title = document.getElementById("title");
const header = title.parentElement; //pega o elemento acima dele
const p = document.createElement("p"); //cria uma tag nova
p.textContent =  "To inserindo antes do título!";
header.insertBefore(p, title); // insere o p, antes de título
console.log(document.body);

const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
li.textContent = "ultimo link";
navLinks.appendChild(li)

const h2 = document.createElement("h2")
h2.textContent = "Novo título"
header.replaceChild(h2, title)

const mainContainer = document.querySelector("#main-container")
const text = document.createTextNode("Inserindo um texto aqui...")
const h3 = document.createElement("h3")
h3.appendChild(text)
mainContainer.appendChild(h3)

const firstLink = navLinks.querySelector("a")
firstLink.text = "Google"
firstLink.setAttribute("href", "https://www.google.com")
firstLink.setAttribute("target", "_blank")

const products = document.getElementsByClassName("product")
const firstProduct =  products[0];
console.log(firstProduct.getBoundingClientRect())

mainContainer.style.color = "blue"
mainContainer.style.backgroundColor = "green"
mainContainer.style.padding = "15px"
async function changeBackgroundColor(element, lastcolor) {
    let corAlterada;
    if(lastcolor == "green"){
        corAlterada = "blue";
        element.style.backgroundColor = corAlterada;
    } else if(lastcolor == "blue"){
        corAlterada = "green";
        element.style.backgroundColor = corAlterada;
    }

    return corAlterada;
}

const title = document.getElementById("title");
const rodape = document.querySelector("footer");

let corTitle = "green";
let corRodape = "blue";

setInterval(() => {
    changeBackgroundColor(title, corTitle).then((corAlterada) => corTitle = corAlterada);
    changeBackgroundColor(rodape, corRodape).then((corAlterada) => corRodape = corAlterada);
}, 2000);

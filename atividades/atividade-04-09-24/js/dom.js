async function changeBackgroundColor(element, lastcolor) {
    const cor = lastcolor;
    let corAlterada;
    if(cor == "green"){
        corAlterada = element.style.backgroundColor = "blue"
    }else if(cor == "blue"){
        corAlterada = element.style.backgroundColor = "green"
    }

    return corAlterada;
}
const title = document.getElementById("title")
const rodape = document.querySelector("footer")
let corTitle = "green"
let corRodape = "blue"
setInterval(() => {
    changeBackgroundColor(title, corTitle).then(() => corTitle = corAlterada)
    changeBackgroundColor(rodape, corRodape).then(() => corRodape = corAlterada)
}, 2000);
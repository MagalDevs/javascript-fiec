async function Multiplicar(x){
    return x * 5;
}

async function alertar(y) {
    let operar = await Multiplicar(y).then((value) => value)
    alert(`${y} x 5 é igual a: ${operar}`);
    y++
    return y;
}

let number = 1;
setInterval(() => {
    alertar(number).then((value) =>{
        number = value
    })
}, 5000);
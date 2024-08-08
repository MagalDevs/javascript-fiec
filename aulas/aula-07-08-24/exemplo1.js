const texto = "Texto para logar!";

function logar(mensagem){
    console.log(mensagem);
}

logar(texto);

const numero1 = 5;
const numero2 = 10;

function somar(n1, n2){
    return n1+ n2
}

alert(somar(numero1, numero2));

function multiplicar(n1, n2){
    if(n2 == undefined){ //se n2 for indefinido, será 2
        return n1*2;
    } else{
        return n1*n2
    }
}

console.log(multiplicar(5));
console.log(multiplicar(5, 5));

//se o n2 não for declarado, n2 assumirá o valor 2.
function dividir(n1, n2 = 2){
    return n1/n2;
}

console.log(dividir(10));
console.log(dividir(100, 25));


//ARROW FUNCTION
const alertar = (mensagem) => {
    alert(mensagem);
}

alertar("Mensagem para alertar")
class automovel{
    constructor(nome, marca, valor){
        this.nome = nome;
        this.marca = marca;
        this.valor = valor;
    }
}

const usuario = "user";
const senha = "1234";

while(true){
    usuarioPrompt = prompt("Digite o nome de usuário");
    if (usuarioPrompt == usuario){
        break;
    } else{
        alert("Nome de usuário Incorreto.")
        continue;
    }
}

while(true){
    senhaPrompt = prompt("Digite sua senha");
    if(senhaPrompt === senha){
        break;
    } else {
        alert("Senha incorreta.")
        continue;
    }
}

let listaAutomovel = [];

function infoautomovel(){
    while(true){
        let infoNome = prompt("Digite o nome do Automóvel");
        if(infoNome == ""){
            break;
        }else{
            let infoMarca = prompt("Digite a marca do Automóvel");
            let infoValor = prompt("Digite o valor do Automóvel");
            let infoValorFloat;
            if(infoMarca == ""){
                infoMarca = undefined;
            }

            if(infoValor == ""){
                infoValor = undefined;
            } else {
                infoValorFloat = parseFloat(infoValor);
            }
            console.log("Automóveis cadastrados com sucesso!");
            listaAutomovel.push(new automovel(infoNome, infoMarca, infoValorFloat));
        }
    }
    
    console.log(listaAutomovel);
}

function listaCompleta(){
    console.log("Lista Completa:")
    listaAutomovel.forEach((automovel) => {
        console.log(`Nome: ${automovel.nome}`);
        console.log(`Marca: ${automovel.marca}`);
        console.log("valor: R$" + automovel.valor);
    })
}

function ListaNome(){
    console.log("Lista Nome:");
    let listaNomeAuto = listaAutomovel.map(automovel => automovel.nome);
    console.log(listaNomeAuto);
}

function AutosMenorQue1000(){
    console.log("Valores Menores que 1000:");
    let listaValorMenorQue1000 = listaAutomovel.filter((automovel) => automovel.valor < 1000);
    console.log(listaValorMenorQue1000);
}

function soma(){
    let somaValores = listaAutomovel.reduce((soma, automovel) => soma += automovel.valor, 0);
    console.log(`Valor total R$ ${somaValores}`);
}

infoautomovel();
listaCompleta();
ListaNome();
AutosMenorQue1000();
soma();



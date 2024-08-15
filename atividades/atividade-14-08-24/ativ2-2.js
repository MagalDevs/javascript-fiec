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
        let infoNome = prompt("Digite o nome do carro");
        if(infoNome == ""){
            break;
        }else{
            let infoMarca = prompt("Digite a marca do carro");
            let infoValor = prompt("Digite o valor do carro");
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
    
    console.log(listaAutomovel)
}

function listaCompleta(){
    console.log("Lista Completa:")
    listaAutomovel.forEach((automovel) => {
        console.log(automovel.nome);
        console.log(automovel.marca);
        console.log(automovel.valor);
    })
}

function ListaNome(){
    console.log("Lista Nome:")
}
infoautomovel();
listaCompleta();



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

function infoautomovel(){
    
}
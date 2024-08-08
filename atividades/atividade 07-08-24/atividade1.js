function main(){
    let numero = parseInt((prompt("Digite um número(digite 999 para parar)")));
    console.log(numero);
    let maior = numero
    let menor = numero
    if(numero > 999 || numero < 1){
        alert("Número inválido")
    }
    while(numero != 999 && numero >= 1 && numero < 999){
        let numero = parseInt((prompt("Digite um número(digite 999 para parar)")));
        console.log(numero);
        soma = numero
        contador = 1
        if (numero>999 || numero<1){
            alert("Número inválido")
            break
        } else if (numero == 999){
            let divisao = soma / contador
            alert("")
            break
        } else{
            soma += numero
            contador + 1
            if(numero > maior){
                maior = numero
            }else if(numero < menor){
                menor = numero
            }

        }
        
    }
    
}

while(true){
    let user = prompt("Digite seu usuário:")    
    if(user == 'user'){
        break;
    } else{
        alert("Usuário incorreto!");
        continue;
    }
}

while(true){
    let senha = prompt("Digite a sua senha:");
    if (senha == "1234"){
        break;
    } else {
        alert("Senha incorreta!");
        continue;
    }
}

main();
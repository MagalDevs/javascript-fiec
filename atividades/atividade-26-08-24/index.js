import Administrativo from './model/administrativo.js';
import Tecnico from './model/tecnico.js';

let funcionarios = [];
function main() {
    console.log("Registro de funcionários:");
    while(true){
        let verificar = (prompt("Deseja registrar um funcionário? (s/n) "));
        let verificacao = verificar.toLowerCase();

        if(verificacao == "s"){

            let nome = prompt("Nome: ");
            let funcao = prompt("Função(tecnico ou administrativo): ");
            let salario = Number(prompt("Salário: "));
            let matricula = prompt("Matrícula: ");

            if(funcao == "tecnico"){
                let bonusSalarial = Number(prompt("Bônus salarial: "));
                let tecnico = funcionarios.push(new Tecnico(nome, salario, matricula, bonusSalarial));
                alert(`essas informações são as informações do funcionário:\nNome: ${nome}\nMatrícula: ${matricula}\nSalário: R$${salario}\nFunção: ${funcao}.`);

            } else if(funcao == "administrativo"){
                let turno = prompt("Turno(diurno ou noturno): ");
                let administrativo = funcionarios.push(new Administrativo(nome, salario, matricula, turno));
                alert(`essas informações são as informações do funcionário:\nNome: ${nome}\nMatrícula: ${matricula}\nSalário: R$${salario}\nFunção: ${funcao}.`);
            } else {
                alert("Informação inválida, ensira os dados novamente");
            }

        } else if(verificacao == "n"){ 

            break; 
        } else {
            console.log("Opção inválida.");
            continue;
        }    
    }   
}      


main();
console.log("Funcionários cadastrados:");
funcionarios.forEach(funcionario => {
    console.log(funcionario);
    console.log(`Nome: ${funcionario.nome} - Salário Anual: RS ${funcionario.GanhoAnual()}`);
})

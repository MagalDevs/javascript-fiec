import Administrativo from './model/administrativo.js';
import Tecnico from './model/tecnico.js';

let funcionários = [];
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
            let tecnico = funcionários.push(new Tecnico(nome, salario, matricula, bonusSalarial));
            console.log(`essas informações são as informações do funcionário: ${tecnico.nome},\n${tecnico.salario},\n${tecnico.matricula},\n${tecnico.bonusSalarial}.`);

        } else if(funcao == "administrativo"){
            let turno = prompt("Turno(diurno ou noturno): ");
            let administrativo = funcionários.push(new Administrativo(nome, salario, matricula, turno));
            console.log(`essas informações são as informações do funcionário: ${nome},\nR$ ${salario},\n${matricula},\n${turno}.`);
        } else {
            console.log("Informação inválida, ensira os dados novamente");
        }

    } else if(verificacao == "n"){ 

        break; 
    } else {
        console.log("Opção inválida.");
        continue;
    }    
}   
        



console.log("Funcionários cadastrados:");
funcionários.forEach(funcionario => {
    console.log(funcionario);
    log(funcionários.GanhoAnual());
})

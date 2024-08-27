import Funcionario from "./funcionario.js";

export default class Assistente extends Funcionario{
    #numeroDeMatricula;

    constructor(nome, salario, numeroDeMatricula){
        super(nome, salario);
        this.#numeroDeMatricula = numeroDeMatricula;
    }

    get numeroDeMatricula() {return this.#numeroDeMatricula};
    set numeroDeMatricula(numeroDeMatricula) {this.#numeroDeMatricula = numeroDeMatricula};

    ExibeDados(){
        console.log(`Funcionário: ${super.nome}, Nº Matrícula: ${this.#numeroDeMatricula}\nSalário: R$${super.salario}.\nSalário Anual: ${this.GanhoAnual()}`);
    }
}
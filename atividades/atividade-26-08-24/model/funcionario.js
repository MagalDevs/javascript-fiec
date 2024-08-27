export default class Funcionario{
    #nome;
    #salario;

    constructor(nome, salario) {
        this.#nome = nome;
        this.#salario = salario;
    }

    get nome() {return this.#nome}
    set nome(nome) {this.#nome = nome}

    get salario() {return this.#salario}
    set salario(salario) {this.#salario = salario}

    AddAumento(){
        return this.#salario * 1.1;
    }

    GanhoAnual(){
        return this.#salario * 12;

    }

    ExibeDados(){
        console.log(`Funcionário: ${this.#nome}, Salário: R$${this.#salario}.\nSalário Anual: ${this.GanhoAnual()}`);
    }
}
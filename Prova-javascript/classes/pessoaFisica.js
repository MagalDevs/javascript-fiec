import contribuinte from "./contribuinte.js";

export default class pessoaFisica extends contribuinte{
    #idade;
    #cpf;

    get idade() { return this.#idade }
    set idade(idade) { this.#idade = idade }

    get cpf() { return this.#cpf }
    set cpf(cpf) { this.#cpf = cpf }

    constructor(nome, rendaBruta, endereco, idade, cpf) {
        super(nome, rendaBruta, endereco);
        this.#idade = idade;
        this.#cpf = cpf;
    }

    calcularImposto(){
        if(super.rendaBruta < 0 || !super.rendaBruta){
            return "Renda bruta inválida!"
        }

        if(super.rendaBruta >= 0 && super.rendaBruta <= 1400){
            return (super.rendaBruta * 0) - 0;

        }else if(super.rendaBruta > 1400 && super.rendaBruta <= 2100){
            return (super.rendaBruta * 0.1) - 100;

        }else if(super.rendaBruta > 2100 && super.rendaBruta <= 2800){
            return (super.rendaBruta * 0.15) - 270;

        }else if(super.rendaBruta > 2800 && super.rendaBruta <= 3600){
            return (super.rendaBruta * 0.25) - 500;
        }else{
            return (super.rendaBruta * 0.3) - 700;
        }
    }
}
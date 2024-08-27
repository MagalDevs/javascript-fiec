import Assistente from "./assistente.js";

export default class Tecnico extends Assistente{
    #bonusSalarial;

    constructor(nome, salario, numeroDeMatricula, bonusSalarial) {
        super(nome, salario, numeroDeMatricula)
        this.#bonusSalarial = bonusSalarial;
        
    }

    get bonusSalarial() {return this.#bonusSalarial}
    set bonusSalarial(bonusSalarial) {this.#bonusSalarial = bonusSalarial}

    GanhoAnual(){
        return (super.salario + this.#bonusSalarial) * 12;
    }
}
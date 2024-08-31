import Assistente from "./assistente.js";

export default class Administrativo extends Assistente{
    #turno;
    #adicionalNoturno = 1.2;

    get turno() {return this.#turno}
    set turno(turno) {this.#turno = turno}
    
    constructor(nome, salario, matricula, turno){
        super(nome, salario, matricula);
        this.#turno = turno;
    }

    GanhoAnual(){
        switch(this.#turno){
            case "noturno":
                return super.salario * this.#adicionalNoturno * 12;
            default:
                return super.salario * 12;
        }
    }
}
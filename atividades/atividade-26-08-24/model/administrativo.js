import Assistente from "./assistente.js";

export default class Administrativo extends Assistente{
    #turno;
    #adicionalNoturno;

    get turno() {return this.#turno}
    set turno(turno) {this.#turno = turno}

    get adicionalNoturno() {return this.#adicionalNoturno}
    set adicionalNoturno(adicionalNoturno) {this.#adicionalNoturno = adicionalNoturno}

    
}
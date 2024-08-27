import Ingresso from "./ingresso.js";

export default class Vip extends Ingresso {
    #valorAdicional;

    get valorAdicional() {return this.#valorAdicional}
    set valorAdicional(valorAdicional) {this.#valorAdicional = valorAdicional}

    imprimeValor() {
        console.log(super.valor + this.#valorAdicional);
    }

    constructor(valor, valorAdicional) {
        super(valor, "VIP");
        this.#valorAdicional = valorAdicional;
    }
}
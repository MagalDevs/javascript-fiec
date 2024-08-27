import Vip from "./vip.js";

export default class Camarote extends Vip {
    #localizacao;

    get localizacao() {return this.#localizacao}
    set localizacao(localizacao) {this.#localizacao = localizacao}

    imprimeTipoIngresso() {
        console.log(`Ingresso ${super.tipoIngresso} - Camarote ${this.#localizacao}`);
    }

    constructor(valor, localizacao, valorAdicional) {
        if (localizacao == "Superior") {
            valorAdicional = valorAdicional * 2;
        }

        super(valor,valorAdicional);
        this.#localizacao = localizacao;
    }
}
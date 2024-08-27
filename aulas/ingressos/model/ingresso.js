export default class Ingresso {
    #valor;
    #tipoIngresso;

    get valor() {return this.#valor}
    set valor(valor) {this.#valor = valor}
    get tipoIngresso() {return this.#tipoIngresso}
    set tipoIngresso(tipoIngresso) {this.#tipoIngresso = tipoIngresso}

    imprimeValor() {
        console.log(this.#valor);
    }

    imprimeTipoIngresso() {
        console.log(`Ingresso ${this.#tipoIngresso}`);
    }

    constructor(valor, tipoIngresso) {
        this.#valor = valor;
        this.#tipoIngresso = tipoIngresso;
    }
}
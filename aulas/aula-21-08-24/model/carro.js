import Automovel from "./automovel.js";

export default class Carro extends Automovel {

    #portas;
    
    get portas() { return this.#portas }

    set portas(portas) { this.#portas = portas }

    constructor(marca, modelo, valor, cor, placa, rodas, portas) {
        super(marca, modelo, valor, cor, placa, rodas);
        this.#portas = portas;
    }
}
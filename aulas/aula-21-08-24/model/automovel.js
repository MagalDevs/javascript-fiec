export default class Automovel {

    #marca;
    #modelo;
    #valor;
    #cor;
    #placa;
    #rodas;

    get marca() { return this.#marca }

    set marca(marca) { this.#marca = marca }

    get modelo() { return this.#modelo }

    set modelo(modelo) { this.#modelo = modelo }

    get valor() { return this.#valor }

    set valor(valor) { this.#valor = valor; }

    get cor() { return this.#cor }

    set cor(cor) { this.#cor = cor }

    get placa() { return this.#placa }

    set placa(placa) { this.#placa = placa }

    get rodas() { return this.#rodas }

    set rodas(rodas) { this.#rodas = rodas }

    constructor(marca, modelo, valor, cor, placa, rodas) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#valor = valor;
        this.#cor = cor;
        this.#placa = placa;
        this.#rodas = rodas;
    }
}
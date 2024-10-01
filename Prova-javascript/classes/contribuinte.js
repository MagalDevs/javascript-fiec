export default class contribuinte{
    #nome;
    #rendaBruta;
    #endereco;

    get nome() { return this.#nome }
    set nome(nome) { this.#nome = nome }

    get rendaBruta() { return this.#rendaBruta }
    set rendaBruta(rendaBruta) { this.#rendaBruta = rendaBruta}

    get endereco() { return this.#endereco }
    set endereco(endereco) { this.endereco = endereco }

    constructor(nome, rendaBruta, endereco) {
        this.#nome = nome;
        this.#rendaBruta = rendaBruta
        this.#endereco = endereco
    }

    calcularImposto(){
    }
}
export default class Imovel{
    #endereco;
    #preco;

    get endereco() { return this.#endereco};
    set endereco(endereco) { this.#endereco = endereco};

    get preco() { return this.#preco};
    set preco(preco) { this.#preco = preco};

    constructor(endereco, preco){
        this.#endereco = endereco;
        this.#preco = preco;
    }
}
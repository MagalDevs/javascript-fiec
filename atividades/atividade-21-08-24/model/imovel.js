export default class imovel{
    #endereco;
    #preco;

    get endereco() { return this.#endereco};
    set endereco(endereco) { this.#endereco = endereco};

    get preco() { return this.#preco};
    set preco(preco) { this.#preco = preco};
}
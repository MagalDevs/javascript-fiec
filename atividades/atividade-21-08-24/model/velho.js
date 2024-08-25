import Imovel from "./imovel.js";

export default class Velho extends Imovel{

    #descontoPreco;

    get descontoPreco() { return this.#descontoPreco };
    set descontoPreco(descontoPreco) { this.#descontoPreco = descontoPreco}

    descontarPreco(){
        return super.preco - this.#descontoPreco;
    }

    constructor(endereco, preco, descontoPreco){
        super(endereco, preco);
        this.#descontoPreco = descontoPreco;

    }

}
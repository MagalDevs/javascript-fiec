import Imovel from "./imovel.js";

export default class novo extends Imovel{
    #adicionalPreco;

   get adicionalPreco() { return this.#adicionalPreco};
   set adicionalPreco(adicionalPreco) { this.#adicionalPreco = adicionalPreco};

   adicionarPreco(){
    return super.preco + this.#adicionalPreco;
   }

   constructor(endereco, preco, adicionalPreco) {
    super(endereco, preco);
    this.#adicionalPreco = adicionalPreco;
    
   }
}
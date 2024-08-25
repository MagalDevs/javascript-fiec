import Imovel from "./model/imovel.js";
import Velho from "./model/velho.js";
import novo from "./model/novo.js";

const imovel = new Imovel('Rua Mario, 123', 100000);
console.log(imovel);

const imovelNovo = new novo('Rua Luigi, 983', 4000000, 150000);
console.log(imovelNovo);
console.log(imovelNovo.adicionarPreco());

const imovelVelho = new Velho('Rua Magas, 449', 600000, 200000);
console.log(imovelVelho);
console.log(imovelVelho.descontarPreco());
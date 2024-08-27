import Normal from "./model/normal.js";
import Camarote from "./model/camarote.js";

const normal = new Normal(50);
console.log(normal);
normal.imprimeTipoIngresso();
normal.imprimeValor();

const camaroteInferior = new Camarote(100, "Inferior", 50);
console.log(camaroteInferior);
camaroteInferior.imprimeTipoIngresso();
camaroteInferior.imprimeValor();

const camaroteSuperior = new Camarote(200, "Superior", 50);
console.log(camaroteSuperior);
camaroteSuperior.imprimeTipoIngresso();
camaroteSuperior.imprimeValor();
import Automovel from "./automovel.js";

export default class Moto extends Automovel {
    constructor(marca, modelo, valor, cor, placa, rodas) {
        super(marca, modelo, valor, cor, placa, rodas);
    }
}
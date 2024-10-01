import contribuinte from "./contribuinte.js";

export default class pessoaJuridica extends contribuinte{
    #cnpj
    #tipoDeEmpresa

    get cnpj() {return this.#cnpj}
    set cnpj(cnpj) { this.#cnpj = cnpj }

    get tipoDeEmpresa() { return this.#tipoDeEmpresa }
    set tipoDeEmpresa(tipoDeEmpresa) { this.#tipoDeEmpresa = tipoDeEmpresa }

    constructor(nome, rendaBruta, endereco , cnpj, tipoDeEmpresa) {
        super(nome, rendaBruta, endereco);
        this.#cnpj = cnpj;
        this.#tipoDeEmpresa = tipoDeEmpresa
    }

    calcularImposto(){
        return super.rendaBruta * 0.10;
    }
}
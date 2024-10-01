import contribuinte from "./classes/contribuinte.js";
import pessoaFisica from "./classes/pessoaFisica.js";
import pessoaJuridica from "./classes/pessoaJuridica.js";



let listaContribuintes = []

while(true){
    let menu = prompt("Você é pessoa física ou jurídica?(fisica/juridica/finalizar(encerrar o programa)").toLowerCase()

    if (menu == "finalizar") {
        alert("IMPOSTOS GERADOS COM SUCESSO!")
        break;
    }

    if(menu == "fisica"){
            let nome = prompt("Digite seu nome:")
            let idade = prompt("Digite sua idade:")
            let cpf = prompt("Digite seu cpf:")
            let endereco = prompt("Digite seu endereço:")
            let rendaBruta = prompt("Digite sua Renda Bruta:")

            let rendaBrutaNUMBER = Number(rendaBruta)

            listaContribuintes.push(new pessoaFisica(nome, rendaBrutaNUMBER, endereco, idade, cpf))

    }

    if(menu == "juridica"){
            let nomeEmpresa = prompt("Digite o nome:")
            let cnpj = prompt("Digite o CNPJ:")
            let enderecoEmpresa = prompt("Digite o Endereço:")
            let tipoDeEmpresa = prompt("Digite o tipo da empresa:")
            let rendaBrutaEmpresa = prompt("Digite a renda bruta da empresa:")

            let rendaBrutaEmpresaNUMBER = Number(rendaBrutaEmpresa)

            listaContribuintes.push(new pessoaJuridica(nomeEmpresa, rendaBrutaEmpresaNUMBER, enderecoEmpresa, cnpj, tipoDeEmpresa))
    }
}


const listaPessoaFisica = listaContribuintes.filter((contribuinte) =>{
    if(contribuinte instanceof pessoaFisica){
        return contribuinte;
    }
})

const listaPessoaJuridica = listaContribuintes.filter((contribuinte) => {
    if (contribuinte instanceof pessoaJuridica) {
        return contribuinte
    }
})

console.log("Lista de Pessoa Física:");

listaPessoaFisica.forEach((pessoa) => {
    console.log(`nome: ${pessoa.nome}, idade: ${pessoa.idade}, CPF: ${pessoa.cpf}, endereço: ${pessoa.endereco}, Renda Bruta: R$ ${pessoa.rendaBruta}, Imposto de renda: ${pessoa.calcularImposto()}`)
})

console.log("Lista de Pessoa Jurídica: ");

listaPessoaJuridica.forEach((pessoa) => {
    console.log(`nome: ${pessoa.nome}, Tipo de Empresa: ${pessoa.tipoDeEmpresa}, CNPJ: ${pessoa.cnpj}, endereço: ${pessoa.endereco}, Renda Bruta: R$ ${pessoa.rendaBruta}, Imposto de renda: ${pessoa.calcularImposto()}`)
})

console.log("Valor Total de Todas as Rendas Brutas:");

const total = listaContribuintes.reduce((total, contribuinte) => total += contribuinte.rendaBruta, 0)
console.log(`R$ ${total}`);

async function nomeEmpresas(){
    const listaNomeEmpresas = listaPessoaJuridica.map((contribuinte) => contribuinte.nome)

    return listaNomeEmpresas;
}

async function impostoMenorQueMil(){
    const listaImpostoMenorque100 = listaPessoaFisica.filter((contribuinte) => contribuinte.calcularImposto() < 1000)

    return listaImpostoMenorque100
}



nomeEmpresas().then((value) => console.log(value))
impostoMenorQueMil().then((value) => console.log(value))
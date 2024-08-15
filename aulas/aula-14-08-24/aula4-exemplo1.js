class pessoa{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

let fulano = new pessoa("fulano", 32, 1234);
let ciclano = new pessoa("Ciclano", 34, 12345);
let bulano = new pessoa("Bulano", 54, 123456);

let arrayPessoa = [fulano, ciclano, bulano]


arrayPessoa.forEach(pessoa =>{
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.cpf)
});

console.log(arrayPessoa);

let listaNomes = arrayPessoa.map((pessoa) => {
    return pessoa.nome
});
let listaNomes2 = arrayPessoa.map((pessoa) => pessoa.nome);

console.log(listaNomes);
console.log(listaNomes2);

let listaPessoasNovas = arrayPessoa.filter((pessoa) => {
    return pessoa.idade < 40;
});
let listaPessoasNovas2 = arrayPessoa.filter((pessoa) => pessoa.idade < 40);

console.log(listaPessoasNovas)
console.log(listaPessoasNovas2)

let somaIdades = arrayPessoa.reduce((soma, pessoa) => soma += pessoa.idade, 0);
let somaIdades2 = arrayPessoa.reduce((soma, pessoa) => {
    return soma += pessoa.idade;
}, 0);

console.log(somaIdades);
console.log(somaIdades2);
/*
let nomePessoa1 = "Fulano";
let idadePessoa1 = 43;
let cpfPessoa1 = 1234;

let nomePessoa2 = "Lulano";
let idadePessoa2 = 48;
let cpfPessoa2 = 12345;

let nomePessoa3 = "Bulano";
let idadePessoa3 = 43;
let cpfPessoa3 = 123456;
*/

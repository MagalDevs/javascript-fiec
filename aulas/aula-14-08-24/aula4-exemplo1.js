class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

let fulano = new Pessoa("Fulano", 23, 1234);
let ciclano = new Pessoa("Ciclano", 32, 4321);
let beltrano = new Pessoa("Beltrano", 56, 9999);

let listaPessoas = [fulano, ciclano, beltrano];

listaPessoas.forEach((pessoa) => {
    console.log(pessoa.nome);
    console.log(pessoa.idade);
    console.log(pessoa.cpf);
});

console.log(listaPessoas);

console.log("Map:")
let listaNomes = listaPessoas.map((pessoa) => {
    return pessoa.nome;
});
let listaNomes2 = listaPessoas.map((pessoa) => pessoa.nome);

console.log(listaNomes);
console.log(listaNomes2);

let listaPessoasNovas = listaPessoas.filter((pessoa) => {
    return pessoa.idade < 40;
});

console.log("Filter:")
let listaPessoasNovas2 = listaPessoas.filter((pessoa) => pessoa.idade < 40);

console.log(listaPessoasNovas);
console.log(listaPessoasNovas2);

let somaIdades = listaPessoas.reduce((soma, pessoa) => soma += pessoa.idade, 0);

let somaIdades2 = listaPessoas.reduce((soma, pessoa) => {
    return soma += pessoa.idade;
}, 0);

console.log(somaIdades);
console.log(somaIdades2);

/*
let nomePessoa1 = "Fulano";
let idadePessoa1 = 23;
let cpfPessoa1 = 1234;

let nomePessoa2 = "Ciclano";
let idadePessoa2 = 32;
let cpfPessoa2 = 4321;

let nomePessoa3 = "Beltrano";
let idadePessoa3 = 56;
let cpfPessoa3 = 9999;

let listaNome = [nomePessoa1, nomePessoa2, nomePessoa3];
let listaIdade = [idadePessoa1, idadePessoa2, idadePessoa3];
let listaCpf = [cpfPessoa1, cpfPessoa2, cpfPessoa3];

for (let i = 0; i < listaNome.length; i++) {
    console.log(listaNome[i]);
    console.log(listaIdade[i]);
    console.log(listaCpf[i]);
}
*/
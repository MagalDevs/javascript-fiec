export default class Animal {
    
    #nome;
    #mamifero;

    get nome() { return this.#nome }

    set nome(nome) { this.#nome = nome }

    get mamifero() { return this.#mamifero }

    set mamifero(mamifero) { this.#mamifero = mamifero }

    fazerSom() { console.log(`O animal ${this.#nome} faz um barulho qualquer...`); }

    mover() { console.log(`O animal ${this.#nome} anda!`); }

    constructor(nome, mamifero) {
        this.#nome = nome;
        this.#mamifero = mamifero;
    }
}
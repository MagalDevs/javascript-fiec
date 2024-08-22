import Animal from './animal.js';

export default class Cachorro extends Animal {

    fazerSom() { console.log(`O cachorro ${super.nome} late!`); }

    mover() { console.log(`O cachorro ${super.nome} anda!`); }

    constructor(nome, mamifero) {
        super(nome, mamifero);
    }
}
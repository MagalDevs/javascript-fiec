/*
function Carro(cor, roda, embreagem, marca, modelo) {
    this.cor = cor,
    this.roda = roda,
    this.embreagem = embreagem,
    this.marca = marca,
    this.modelo = modelo,
    this.acelerar = (velocidadeAcelerar) => console.log(`acelerando o carro até: ${velocidadeAcelerar}`),
    this.frear = (velocidadeFrear) => console.log(`acelerando o carro até: ${velocidadeFrear}`)
}
*/
class Carro {
    constructor(cor, roda, embreagem, marca, modelo) {
        this.cor = cor,
            this.roda = roda,
            this.embreagem = embreagem,
            this.marca = marca,
            this.modelo = modelo,
            this.acelerar = (velocidadeAcelerar) => console.log(`acelerando o carro até: ${velocidadeAcelerar}`),
            this.frear = (velocidadeFrear) => console.log(`acelerando o carro até: ${velocidadeFrear}`);
    }
    constructor(roda, embreagem, marca, modelo) {
        this.cor = cor,
            this.roda = roda,
            this.embreagem = embreagem,
            this.marca = marca,
            this.modelo = modelo,
            this.acelerar = (velocidadeAcelerar) => console.log(`acelerando o carro até: ${velocidadeAcelerar}`),
            this.frear = (velocidadeFrear) => console.log(`acelerando o carro até: ${velocidadeFrear}`);
    }
}

let ferrari = new Carro("Amarelo", 2, "Manual", "Ferrari", "Dino")

console.log(ferrari);
console.log(typeof ferrari);
console.log(`A cor do a carro é ${ferrari.cor}`);
carro.acelerar(60);
carro.frear(30);
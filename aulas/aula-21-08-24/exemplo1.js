// import Automovel from "./model/automovel.js";
// import Carro from "./model/carro.js";
// import Moto from "./model/moto.js";
// import Animal from "./model/animal.js"
import Cachorro from "./model/cachorro.js"
import Gato from "./model/gato.js"

// const auto = new Automovel();
// console.log(auto);
// console.log(typeof auto);
// console.log(Object.getPrototypeOf(auto));

// const onix = new Carro();
// console.log(onix);
// console.log(typeof onix);
// console.log(Object.getPrototypeOf(onix));

// const pcx = new Moto();
// console.log(pcx);
// console.log(typeof pcx);
// console.log(Object.getPrototypeOf(pcx));

// console.log(onix instanceof Automovel);
// console.log(Carro instanceof Automovel);

const caramelo = new Cachorro("Caramelo", true);
const garfield = new Gato("Garfield", true);

caramelo.fazerSom();
caramelo.mover();

garfield.fazerSom();
garfield.mover();
async function multiplicar(x, y) {
    return x * a;
}

multiplicar(4, 2)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

console.log(Object.getPrototypeOf(multiplicar(4, 2)));
console.log("Testando async function!");

// function checkNumber(numero) {
//     return new Promise((resolve, reject) => {
//         if (numero > 0) {
//             resolve("É maior que zero!");
//         } else {
//             reject(new Error("Menor que zero..."));
//         }
//     });
// }

// const numero = checkNumber(7);
// const numero2 = checkNumber(8);
// const numero3 = checkNumber(-9);

// Promise.all([numero, numero2, numero3])
//     .then((values) => values.forEach((value) => console.log(value)))
//     .catch((error) => console.log(error));

// const promessa = Promise.resolve(5 / "X");

// console.log("Passo 1");

// promessa
//     .then((value) => {
//         if (Number.isNaN(value)) {
//             throw new Error("Não deu certo...");
//         }

//         console.log("Passo 2");
//     })
//     .then((value) => console.log(`Segundo then value: ${value}`))
//     .catch((error) => console.log(`Deu ruim por motivos: ${error}`));

// console.log("Passo 3");
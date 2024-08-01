"use strict";
// #1
console.log("1. Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.");
const producto = {
    id: 1,
    name: "Computadora",
    price: 200
};
console.log("\tid:" + typeof producto.id, ",name:" + typeof producto.name, ",price:" + typeof producto.price);
console.log("\t", producto);
// #2
console.log("\n2. Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.");
const numero = 3;
console.log(`\tEl numero ${numero} es ${numero % 2 === 0 ? "par" : "impar"}`);
// #3
console.log("\n3. Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.");
const numero2 = 5;
const numeroClasif = numero2 === 0 ? 0 : numero2 > 2 ? 1 : 2;
switch (numeroClasif) {
    case 1:
        console.log(`\tEl numero ${numero2} es positivo`);
        break;
    case 2:
        console.log(`\tEl numero ${numero2} es negativo`);
        break;
    default:
        console.log(`\tEl numero ${numero2} es cero`);
        break;
}
// #4
console.log("\n4. Implementa una función que recorra un array de nombres y los imprima en consola.");
const nombres = ["Juan", "Pedro", "Pablo"];
nombres.forEach((n, i) => console.log(`\t ${i + 1}. ${n}`));
// Arrays | Listas
console.log("\n--------------------//--------------------\n EJERCICIOS: Arrays | Listas");
// #1
console.log("\n· Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultSum = numeros.reduce((suma, valor) => suma + valor);
console.log(`\tEl resultado de sumar ${numeros} es: ${resultSum}`);
// #2
console.log("\n· Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.");
const str = ["hola", "que", "tal"];
console.log(`\tArray: ${str}`);
console.log(`\tFrase: ${str.join(" ")}`);
// #3
console.log("\n· Tarea 3: Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.");
const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Pablo" }
];
users.forEach((user) => console.log("\t", user));
console.log("\n\tUsers:");
users.forEach((user, i) => console.log(`\t${i + 1}. ${user.name}`));
// #4
console.log("\n· Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.");
const nums = [11, 12, 3, 34, 51, 62, 27, 58, 19, 1];
console.log(`\tEl mayor valor de ${nums} es ${Math.max(...nums)}`); //Puede hacerse con reduce o forEach tmb
// Objetos
console.log("\n--------------------//--------------------\n EJERCICIOS: Objetos");
// #1, #2, #3
console.log("\n· Tarea 1: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.");
console.log("· Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.");
console.log("· Tarea 3:Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.");
class Car {
    constructor({ marca, modelo, año }) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}
class carAdministrator {
    static showInformation(car) {
        console.log("\tInformacion del vehiculo:");
        console.log(`\tMarca: ${car.marca}\n\tModelo: ${car.modelo}\n\tAño: ${car.año}`);
    }
    static increaseYear(car) {
        const newCar = Object.assign(Object.assign({}, car), { año: car.año + 1 });
        return newCar;
    }
}
const car = { marca: "Chevrolet", modelo: "Camaro", año: 2006 };
carAdministrator.showInformation(car);
console.log("\n\tEl nuevo vehiculo generado es:", carAdministrator.increaseYear(car));
console.log("\n--------------------//--------------------\n EJERCICIOS: Funciones");
console.log("· Tarea 1: Implementa una función que reciba un array de números y retorne el mayor valor.");
const nums2 = [11, 12, 3, 34, 51, 62, 27, 58, 19, 1];
const maxNumber = (arr) => arr.reduce((max, current) => (current > max ? current : max));
console.log(`\tEl mayor valor de ${nums} es ${maxNumber(nums)}`);
console.log("\n· Tarea 2: Implementa una función que reciba rest parameters y retorne error si al menos uno de los parametros pasados no es del tipo de los dos primeros parametros.");
function validateParams(...params) {
    return params.every(param => typeof param === typeof params[0]);
}
console.log(`\tSon iguales los tipos del array (1, 2, 3, 4)?: ${validateParams(1, 2, 3, 4)}`);
console.log(`\tSon iguales los tipos del array (1, 2, '3', 4)?: ${validateParams(1, 2, '3', 4)}`);
console.log(`\tSon iguales los tipos del array ('a', 'b', 'c')?: ${validateParams('a', 'b', 'c')}`);
console.log(`\tSon iguales los tipos del array ('a', 'b', true)?: ${validateParams('a', 'b', true)}`);
console.log("\n· Tarea 3: Define una función que reciba una matriz cuadrada de números como parámetro y devuelva la matriz girada 90 grados en sentido horario.");
function rotateMatrix(matrix) {
    const size = matrix.length;
    const rotated = Array(size).fill(null).map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            rotated[j][size - 1 - i] = matrix[i][j];
        }
    }
    return rotated;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("\tOriginal matrix:");
matrix.forEach(row => console.log(`\t|${row.join(" ")}|`));
const rotatedMatrix = rotateMatrix(matrix);
console.log("\tRotated matrix:");
rotatedMatrix.forEach(row => console.log(`\t|${row.join(" ")}|`));

//let: Se utiliza para declarar una variable que puede ser cambiada despues de su inicializacion

//const: Se utiliza para declarar una variable que no puede ser cambiada despues de su inicializacion

//var: Este es otro tipo de variable, su uso no es recomendable actualmente

// ? let

let nombre = "Gabriel";
console.log("Nombre: ",nombre);

// ? const

const edad = 20;
console.log("Edad:", edad);

// ? var

var apellido = "Guzman";
console.log("Apellido: ",apellido);

// ! Tipo de datos primitivos

// ? Number: Los numeros enteros, como tambien los de punto flotante.

// Infinity

const num = 1 / 0;
console.log(num);

const numero = Infinity;
console.log(numero);

// -Infinity

const num1 = -Infinity;
console.log(num1);

// NoN

const num2 = "No es un numero" / 2;
console.log(num2);

// ? String: Es una cadena de caracteres

const saludo = "Hola";
const despedida= 'Adios';
const frase = `${saludo}, como estan?`;
console.log(saludo);
console.log(despedida);
console.log(frase);

// ? Boolean: El tipo de dato solo tiene 2 estados true o false

let esVerdadero = true;
let esFalso = false;

console.log(esVerdadero);
console.log(esFalso);

// ? Null

let edad1= null;

console.log(edad1);

// ? Undefined: Representa la ausensia del valor de una variable

let edad2;
console.log(edad2);

// ! Tipo de datos no primitivos

// ? Object: Los objetos son coleccions de pares clave-valor

let estudiante = {
    nombre: "Gabriel",
    edad: 20,
    carrera: "Ingenieria de ejecucion en computacion e informatica",
    universidad: "UBB"
}
console.log(estudiante);
console.log("Nombre: ",estudiante.nombre);
console.log("Edad: ",estudiante.edad);
console.log("Carrera: ",estudiante.carrera);
console.log("Universidad: ",estudiante.universidad);
console.log(typeof estudiante);
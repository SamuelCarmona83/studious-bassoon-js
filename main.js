// Algoritmica Basica

// variables y constantes

var nombre = 'Elon'
nombre = 'Elias' // operador asignación - reasignar

const apellido = 'Musk'
// apellido = 'Milano'
 
var numeroDeCristiano = 7 // number

var numeroDeVinicius = "7" // string

const expresion = numeroDeCristiano == numeroDeVinicius // comparación
const expresionesEstrictas = numeroDeCristiano !== numeroDeVinicius // comparación distintiva

var numerito = 7888888888888787878788778n;

// console.log(typeof numerito)


const amigo = {
    nombre: 'Alexander',
    apellido: 'De Matteo',
    edad: 30,
    amigo: {
        nombre: 'Samuel',
        apellido: 'Carmona'
    }
}

// amigo = { // TypeError
//     nombre: 'Jimena',
//     apellido: 'De Matteo',
//     edad: 24,
// };
// console.log(amigo);

// camelCase PascalCase kebab-case snake_case
// var nombreClave = 'altura'
// console.log( amigo.nombre, amigo[nombreClave],
//     amigo['colorDeOjos'],
//     amigo.amigo.nombre, // dotValue
//     amigo['amigo']['nombre'] // keyValue
// )


const listaDeAmigos4geeks = ['Cecilia', 'Beli', undefined,'Jimena', null, 'Eliseo', 7, 'Luana']

listaDeAmigos4geeks[999] = 'Jimena'

// console.log(listaDeAmigos4geeks[100])
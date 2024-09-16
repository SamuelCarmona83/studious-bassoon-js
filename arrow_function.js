const amigos = [
    { nombre: 'Natali', colorFav: 'rojo' },
    { nombre: 'Jimena', colorFav: 'verde '},
    { nombre: 'Cecilia', colorFav: 'negro' }
]

// amigos.forEach(function (persona){ // Funcion anonima
//     console.log('Hola ' + persona.nombre + ' te envio un abrazo color ' + persona.colorFav);
// })

amigos.forEach((persona) => { // Funcion Flecha
    console.log('Hola ' + persona.nombre + ' te envio un abrazo color ' + persona.colorFav);
})

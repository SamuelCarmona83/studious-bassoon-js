
// const bandas = [ 'Paramore', 'Linking Park', 'Pink Floyd', 'The Police', 'Audioslave', 'Knocked Loose', 'Pearl Jam']

// console.log(bandas.includes('Park'))

// console.log('Linking Park'.toLowerCase().includes('Park'.toLowerCase()))

const bandas = [ 
    { 
        name:  'Paramore',
        albums: 3
    },
    {
        name: 'Linking Park',
        albums: 7,
    }, 
    {
        name: 'Pink Floyd',
        albums: 15
    },
    {
        name: 'The Police',
        albums: 9
    },
    {
        name: 'Audioslave',
        albums: 3
    },
    {
        name: 'Knocked Loose',
        albums: 2
    },
    {
        name: 'Pearl Jam',
        albums: 7
    }
]
/*  Find ejecuta una funcion que debe determinar si el elemento cumple con la busqueda.
    Y retorna el primero que cumple con la condición
*/
const busqueda = bandas.find(element =>  element.albums >= 3);

// Investigar filter en MDN
const search = bandas.filter( (element) => {
    if(element.albums >= 3){
        return true
    }
    return false
})

console.log('Searched item:', search)
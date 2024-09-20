
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

const bandsInHtml = bandas.map( 
    banda => `<li>
        ${banda.name} : Is a ${ banda.albums > 8 ? "bad" : "good" } band
    </li>`
)

console.log(bandsInHtml)
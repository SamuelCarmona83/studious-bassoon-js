
const listaDeAmigos4geeks = ['Cecilia', 'Beli', 'Natali', 'Jimena', 'Alexander', 'Eliseo', 'Bruno', 'Luana']


// Condicion inicial - Concidicion critica o condicion de salida - Condicion incremental
for(let index = 0; index < listaDeAmigos4geeks.length; index++){
    console.log(listaDeAmigos4geeks[index])
}

function saludarAmigo(elemento, indice){
    console.log(indice + " Hola estimado/a "+ elemento)
}

listaDeAmigos4geeks.forEach(saludarAmigo)

listaDeAmigos4geeks.forEach(
    (_, indice) => {
        console.log(indice)
    }
)

for(let amigo of listaDeAmigos4geeks){
    console.log(amigo)
}

for(let index in listaDeAmigos4geeks){
    console.log(index)
}
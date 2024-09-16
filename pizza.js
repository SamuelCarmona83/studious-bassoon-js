
const vegetales = ['Piña', 'Pimenton', 'Cebolla', 'Rugula', 'Aceitunas Negras']
const proteinas = ['Pepperoni', 'Pancheta','Anchoas', 'Capresse']
const bordes = ['normal', 'queso']

let elementoAleatorio = (lista) => {
    let numeroAleatorio = Math.floor( Math.random() * lista.length )
    return lista[numeroAleatorio]
} 

function cocinarPizza(){
    console.log('Precalentar el horno.')

    const pizzaAleatoria = `
        vegetal: ${ elementoAleatorio(vegetales)}
        proteina: ${ elementoAleatorio(proteinas) }
        bordes: ${ elementoAleatorio(bordes) }
    `
    console.log('Sacar del horno')

    return  pizzaAleatoria
}

let pizza = cocinarPizza();
console.log(' 🍕' +  pizza)
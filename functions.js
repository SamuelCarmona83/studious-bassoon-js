
// definicion de la funcion
function saludar(amigo1){ // parametros
    console.log("Hola " + amigo1)
}

// saludar("Jimena") // Invocación de la función
// saludar("Luana", "Samuel", "Cristhian")  
// saludar(256) // Argumentos

let resultado = 3;

function sumar(numero1, numero2){
    // solo existe dentro de sumar
    let numerito = 0; // alcance o scope
    numerito = numero1 + numero2
    if (numero1 > 0 && numero2 > 0){
        return numerito;
    } else {
        return 0;
    }   
    return null; // nunca se alcanza
}

function multiplicacion(numero1, numero2){
    // if ( numero1 < 0 || numero2 < 0) return 0;
    return numero2 * numero1
}

resultado = sumar(7,resultado) 
resultado = sumar(resultado, -1) // decremento

resultado = sumar(resultado, multiplicacion(5,2))

let total = multiplicacion(999, -8)


console.log(resultado, total)
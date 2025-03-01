let mínimo = 1, máximo = 10;
let numero = Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo);
let cont = 3;  // Tres intentos totales
let input;

while (cont > 0) {
    // Condición dependiendo del número de intentos para el uso de plural o singular
    if ( cont > 1 ){
        input = parseInt(prompt(`Elija un número entre ${mínimo} y ${máximo} (Tienes ${cont} intentos):`));
    }else{
        input = parseInt(prompt(`Elija un número entre ${mínimo} y ${máximo} (Tiene ${cont} intento):`));
    }    
    
    // Verificación de que el número ingresado está dentro del rango permitido
    while (isNaN(input) || input < mínimo || input > máximo) {
        input = parseInt(prompt(`Por favor, ingrese un número válido entre ${mínimo} y ${máximo}:`));
    }
    
    // Verificación de si el número ingresado es el correcto
    if (input === numero) {
        alert("¡Ganasteeeeeeeee! 🎉🎉🎉🎉");
        break;
    }
    
    // Disminuir el contador si el número es incorrecto
    cont--; 
    
    // Notificación de número incorrecto y nuevo intento si aún quedan intentos
    if (cont > 0) {
        alert("Ese no es el número. Intenta de nuevo.🤞");
    }
}

// Notificación de que no acertó el número
if (cont === 0) {
    alert(`¡Perdiste!🤦‍♀️🤦‍♀️🤦‍♀️ El número era ${numero}. Mejor suerte la próxima.`);
}


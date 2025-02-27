// Variables
let nombre;
let edad;
let lenguaje;
let resp;

// Función para ingresar datos según el tipo especificado (string o int)
function ingreso_datos(tipo, msg){
    let input;
    // Si el tipo es "string", solicita una cadena de texto
    if (tipo === "string"){
        input = prompt(msg).trim(); // Elimina los espacios en blanco al inicio y al final
    } else if (tipo === "int") {
        // Si el tipo es "int", solicita un número y lo convierte a entero
        input = parseInt(prompt(msg));
    } else {
        // Error en selecion de tipo
        console.log("Ingreso de tipo no valido")
    }        
        
    return input; // Devuelve el valor ingresado
}

// Función para verificar si la condición se cumple, de no ser así, solicita los datos nuevamente
function verify(valor, condition, msg, tipo){
    while(condition(valor)){
        valor = ingreso_datos(tipo, msg); // Vuelve a pedir el dato si la condición es verdadera
    }
    return valor; // Devuelve el valor válido
}

// Solicitar el nombre
nombre = ingreso_datos("string", "¿Cuál es tu nombre?");
// Verificar que el nombre no sea vacío
nombre = verify(nombre, (valor) => !valor, "Por favor, ingresa tu nombre.", "string");

// Solicitar la edad
edad = ingreso_datos("int", "¿Cuántos años tienes?");
// Verificar que la edad sea un número entero mayor que 0
edad = verify(edad, (valor) => isNaN(valor) || valor <= 0, "La edad debe ser un número entero mayor que 0. Inténtalo de nuevo.", "int");

// Solicitar el lenguaje de programación
lenguaje = ingreso_datos("string", "Qué lenguaje de programación estás estudiando?");
// Verificar que el lenguaje no sea vacío
lenguaje = verify(lenguaje, (valor) => !valor, "Por favor, ingresa un lenguaje de programación.", "string");

// Mostrar el mensaje según la edad (si es 1 o más años)
if (edad !== 1) {
    console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
} else {
    console.log(`Hola ${nombre}, tienes ${edad} año y ya estás aprendiendo ${lenguaje}!`);
}

// Solicitar respuesta sobre si le gusta estudiar el lenguaje
resp = ingreso_datos("int", `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
// Verificar que la respuesta sea 1 o 2
resp = verify(resp, (valor) => valor !== 1 && valor !== 2, "Por favor, responde con 1 (SÍ) o 2 (NO).", "int");

// Mostrar mensaje según la respuesta sobre el gusto por estudiar el lenguaje
if (resp === 1) {
    console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}



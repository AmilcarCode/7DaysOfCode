// Definimos algunas variables para comparar
let numeroUn = 1;
let stringUn = "1";

let numeroTreinta = 30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

// Función para comparar dos variables
function comparar(variable1, variable2) {
    // Comprobamos si las variables son del mismo valor y del mismo tipo
    if (variable1 === variable2) {

        console.log(`Las variables "${variable1}" y "${variable2}" tienen el mismo valor y son del mismo tipo`);
    // Si no son estrictamente iguales, comprobamos si son iguales solo en valor
    } else if (variable1 == variable2) {

        console.log(`Las variables "${variable1}" y "${variable2}" tienen el mismo valor, pero tipos diferentes`);
    // Si las variables no son iguales ni en valor ni en tipo, entramos en este bloque
    } else {
        // Verificamos si las variables son de tipos diferentes
        if (typeof variable1 !== typeof variable2){

            console.log(`Las variables "${variable1}" y "${variable2}" no tienen el mismo valor y no son del mismo tipo`);

        }else{

            console.log(`Las variables "${variable1}" y "${variable2}" no tienen el mismo valor, pero son del mismo tipo`);
        }
        
    }
}

// Llamamos a la función enviando diferentes pares de variables
comparar(numeroUn, stringUn);
comparar(numeroTreinta, stringTreinta);
comparar(numeroDiez, stringDiez);



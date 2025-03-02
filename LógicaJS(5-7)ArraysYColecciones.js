let diccionario = {
    "fruta": [],
    "vegetales": [],
    "lácteos": [],
    "carnes": [],
    "bebidas": [],
    "dulces": [],
    "congelados": []
};

// Mapeo de categorías con números
let categorias = {
    1: "fruta",
    2: "vegetales",
    3: "lácteos",
    4: "carnes",
    5: "bebidas",
    6: "dulces",
    7: "congelados"
};

let lista = [];

// Función para agregar elementos según la categoría
function agregarElemento(categoria, elemento) {
    diccionario[categoria].push(elemento);
    console.log(`Se agregó "${elemento}" a la categoría "${categoria}".`);
}

// Función para el ingreso de alimentos y categorías
function ingresoUsuario() {
    let alimento;
    let categoria;
    let input = 1;

    while (input == 1) {  
        input = prompt("¿Deseas agregar un alimento a tu lista de compras? SI(1) / NO(2)");

        if (input == 2) {
            break;
        } else if (input != 1) { 
            while (input != 1 && input != 2) {
                input = prompt("Respuesta incorrecta, elija: SI(1) / NO(2)");
            }
        }
       
        if (input == 1) {
            alimento = prompt("¿Qué alimento deseas agregar?");
            lista.push(alimento);

            // Mostrar las categorías con números
            let opciones = "Selecciona la categoría ingresando el número correspondiente:\n";
            for (let num in categorias) {
                opciones += `${num}. ${categorias[num]}\n`;
            }

            // Pedir categoría y validar la entrada
            do {
                categoria = prompt(opciones);
                categoria = parseInt(categoria); // Convertir a número
            } while (isNaN(categoria) || !categorias[categoria]); // Validar entrada

            // Agregar el alimento a la categoría correcta
            agregarElemento(categorias[categoria], alimento);
        }
    }
}

// Función para mostrar la lista de compras
function mostrarLista() {
    console.log("Lista de compras: " + lista.join(", "));

    // Recorrer e imprimir el diccionario con `for...in`
    for (let categoria in diccionario) {
        console.log(categoria + ":", diccionario[categoria].join(", "));
    }
}

// Ejecutar las funciones
ingresoUsuario();
mostrarLista();

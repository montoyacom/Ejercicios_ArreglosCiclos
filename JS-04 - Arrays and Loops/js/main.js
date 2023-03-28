const alerta1 = document.getElementById("Fila");
const alerta2 = document.getElementById("ejercicio_2");

let fila_1 = [
    "Sofia",
    "David",
    "Juan"
];
alerta1.innerHTML = " <<< LA FILA DEL BANCO >>> <br><ul>"
    + "<ol><li>"
    + fila_1[0]
    + "</li><li>"
    + fila_1[1]
    + "</li><li>"
    + fila_1[2]
    + "</li></ol>"
console.log(" +--- Fila banco ---+ ");
console.log(fila_1);
fila_1.push("Sara", "Agusto");
console.log(fila_1);
fila_1.shift();
console.log(fila_1);
fila_1.splice(1, 0, "Renata");
console.log(fila_1);
fila_1.push("Elena");
console.log(fila_1);

console.log(" +--- Triángulo en arreglo ---+ ");

// <<< --- Bucle para crear el patrón del tríangulo--- >>> //

// Tamaño del patrón
const altura = 5;

// Array vacío para guardar el patrón
const triangulo = [];

for (
    let contador_fila_triangulo = 0; 
    contador_fila_triangulo < altura; 
    contador_fila_triangulo++) {
    
    // Crea una fila vacía
    triangulo[contador_fila_triangulo] = []; 

    for (let contador_simbolo = 0;
        contador_simbolo < contador_fila_triangulo + 1;
        contador_simbolo++){
        // Añade el caracter al arreglo triangulo[] 
        // según el contador del primer for() que sería contador_fila_triangulo la posición de la fila
        // y el segundo for() que sería el contador_simbolo agregando columnas.      
        triangulo[contador_fila_triangulo][contador_simbolo] = '1'; 
    }
    //  +++ se pueden introducir valores en los espacios vacios con esta función +++ //

    /*
    for (let simbolo_vacio = fila_triangulo + 1; simbolo_vacio < altura; simbolo_vacio++) {
        triangulo[fila_triangulo][simbolo_vacio] = ""; // Añade los carácteres del otro lado y puede devolver vacío.
    }
    */
}

console.log(triangulo);
console.log(" +--- Triángulo solo impresión ---+ ");
// <<< --- controla el número de filas --- >>> //
for (let contador_0 = 1; contador_0 <= 5; contador_0++) {
    let fila_2 = '';
    // +++ Mete los asteríscos al arreglo +++ //
    for (let j = 1; j <= contador_0; j++) {
        fila_2 += '*';
        triangulo.push[fila_2];
    }

    console.log(fila_2);
}

alerta2.innerHTML = " <<< Triángulo rectángulo o cómo sea no sé luego pregunto. >>> <br><ul>"
    + "<ul><li>"
    + triangulo[0]
    + "</li><li>"
    + triangulo[1]
    + "</li><li>"
    + triangulo[2]
    + "</li><li>"
    + triangulo[3]
    + "</li><li>"
    + triangulo[4]
    + "</li></ul>"


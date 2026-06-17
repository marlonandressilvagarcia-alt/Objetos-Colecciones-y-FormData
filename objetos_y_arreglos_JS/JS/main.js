// Definimos el objeto persona con sus propiedades básicas
const persona = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    peso: "60 kg",
    
    // Definimos el método (comportamiento) caminar
    caminar() {
        console.log("Estoy caminando");
    }
};


// Mostramos el objeto completo en la consola
console.log(persona);


/* 
   Esperado en Consola:
   { nombre: "Juan", edad: 23, altura: 1.68, peso: "60 kg" }
*/

// Llamamos al método usando el punto (.)
persona.caminar();


/* 
   Esperado en Consola:
   "Estoy caminando"
*/

// Convertimos nuestro objeto vivo a una cadena de texto JSON
const personaJSON = JSON.stringify(persona);


console.log(personaJSON);


/* 
   Esperado en Consola:
   '{"nombre":"Juan","edad":23,"altura":1.68,"peso":"60 kg"}'
*/
// Creamos una colección de empleados usando objetos dentro de un arreglo
const listaEmpleados = [
    { nombre: "Juan Pérez", apellido: "López" },
    { nombre: "Ana", apellido: "González" },
    { nombre: "Pedro", apellido: "Sánchez" }
];


console.log(listaEmpleados);


/* 
   Esperado en Consola:
   [ {nombre: "Juan Pérez", ...}, {nombre: "Ana", ...}, {nombre: "Pedro", ...} ]
*/
const frutas = ["Manzana", "Banana", "Naranja"];


// Buscamos en qué posición está la "Manzana"
const posicionManzana = frutas.indexOf("Manzana");


console.log(posicionManzana);


/* 
   Esperado en Consola:
   0
*/
const edades = [25, 30, 18, 15];


// Buscamos el primer elemento que sea menor a 20 años
const primerMenor = edades.find(edad => edad < 20);


console.log(primerMenor);


/* 
   Esperado en Consola:
   18
*/

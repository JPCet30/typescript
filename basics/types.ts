

let edad: number = 20; // acá defino el tipo de dato que quiero que utilizar
let nombre: string = "Juan";
let isAlto: boolean = true;
let person: Object = {};
let arreglo: Array<string> = ["Juan", "Pedro"];

let frutas: object[] = [{}, { name: "manzana" }];

let respuesta: any = "Hola"; // cualquier tipo... evitarlo
respuesta = true;
respuesta = ["Hola",123]



// tyscript en funciones

function saludar(): void { // void, significa que no retorna nada
    console.log("Hola")
}


// Tipo desconocido
let respuesta2: unknown;
respuesta2 = true;


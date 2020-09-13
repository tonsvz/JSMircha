export const PI = Math.PI;

export let user = "Tonsvz";
let password = "asd18946281";
// export default password; //Asi se debe exportar de manera default una variable let o const, primero declaracion y luego el export


const hello = () => { console.log("Hola"); //Funcion Expresada

}

//NO PUEDES USAR DEFAULT EN VARIABLES
export default function saludar() { //Funcion Definida, solo las funciones y clases pueden ser declaradas por default antes de su asignacion
    console.log("Hola modulos +ES6");
    
}

export class Saludar{ //Azucar Sintactico
    constructor(){
        console.log("Hola Clases +ES6");
    }
}


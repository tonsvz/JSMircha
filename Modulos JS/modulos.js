// //Modulos (Import / Export); // el archivo JS a llamar debe tener type=module en su linea de codigo para poder ser exportado e importado. // Default solo puede haber 1 por archivo. y sale de la destructuracion ejemplo: variables, clases o funciones con export default, {variables,clases o funciones export,variables, clases o funciones export, variables,clases o funciones export}
import saludar,{PI,Saludar,user}from "./constantes.js"
import {aritmetica as calculus} from "./aritmetica.js" // -as- permite asignar un alias al modulo a llamar.
console.log("Archivo Modulo.js");

// console.log(PI,user);
// console.log(calculus.sumar(3,5));
// saludar();
// let saludo = new Saludar();
// saludo;

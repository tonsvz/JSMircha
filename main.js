let nombre = "Tony";
let apellido = "Veliz"
let saludo =  new String("Hola Mundo")
let lorem = "lorem lorem lorem lomem ipsum dolor dolor"
let fullName = `Hola mi nombre es ${nombre} ${apellido}`; // Template string para concatenar mejor
const c = Array.of("x",2,true)  //Nueva y actual manera de declarar arrays en EC5
const d = Array(100).fill(true) //Nueva y actual manera de declarar arrays en EC5
document.write(fullName)
console.log(nombre,apellido,saludo);
console.log(c);
console.log(nombre.length, apellido.length,saludo.length, nombre.toUpperCase(), lorem.includes("dolor"), lorem.trim(), lorem.split(" "));
console.log(c.length);//midde longitud del objeto 
console.log(d);

const f = new Array(1,2,3,4,true);//Antigua y obsoleta manera de declarar arrays.
f.push("black") // agrega un elemento al final
console.log(f);
f.pop(); // elimina el ultimo elemento
console.log(f);
f.forEach((el, index) => { // metodo for.each
console.log(`<li id="${index}">${el}</li>`); //iteraciones.
})


//dentro de un objeto las variables se le conocen como propiedades y a las funciones se les conoce como metodos.
const tony = {pasatiempo: "jugar, programar", nombre: "Tony", apellido:"veliz", edad:30, sayname:function () {
    console.log(`Mi nombre es ${this.nombre}`);
    
}} //objeto
console.log(tony);//objeto imprimido
console.log(tony.edad);//forma de accesar a un atributo de objeto
tony.sayname()
console.log(Object.keys(tony)); // => Operadores
console.log(Object.values(tony)); // => Valores
console.log(tony.hasOwnProperty("nombre")); //Propiedad para evaluar valores dentro dele objeto
console.log(tony.hasOwnProperty("nacimiento"));

let a = 5 + (5-10) * 3;
let modulo = 5%2;

console.log(a);
console.log(modulo);


//operadores matematicos

/* 

= 1 igual es asignacion de variable
== 2 iguales es comparacion de valores  <--- actualmente esto es una mala practica 
=== 3 iguales es comparacion de tipo de dato y de valor <--- La buena practica te indica usar esto, esto es para verificar si es ESTRICTAMENTE igual al otro valor a comparar*/ 
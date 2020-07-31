let nombre = "Tony3422";
let apellido = "Veliz"
let saludo = new String("Hola Mundo")
let lorem = "lorem lorem lorem lomem ipsum dolor dolor"
let fullName = `Hola mi nombre es ${nombre} ${apellido}`; // Template string para concatenar mejor
const c = Array.of("x", 2, true) //Nueva y actual manera de declarar arrays en EC5
const d = Array(100).fill(true) //Nueva y actual manera de declarar arrays en EC5
console.log(fullName);
console.log(nombre, apellido, saludo);
console.log(c);
console.log(nombre.length, apellido.length, saludo.length, nombre.toUpperCase(), lorem.includes("dolor"), lorem.trim(), lorem.split(" "));
console.log(c.length); //midde longitud del objeto
console.log(d);

const f = new Array(1, 2, 3, 4, true); //Antigua y obsoleta manera de declarar arrays.
f.push("black") // agrega un elemento al final
console.log(f);
f.pop(); // elimina el ultimo elemento
console.log(f);
f.forEach((el, index) => { // metodo for.each
    console.log(`<li id="${index}">${el}</li>`); //iteraciones.
})


//dentro de un objeto las variables se le conocen como propiedades y a las funciones se les conoce como metodos.
const tony = {
    pasatiempo: "jugar, programar",
    nombre: "Tony",
    apellido: "veliz",
    edad: 30,
    sayname: function () {
        console.log(`Mi nombre es ${this.nombre}`);

    }
} //objeto
console.log(tony); //objeto imprimido
console.log(tony.edad); //forma de accesar a un atributo de objeto
tony.sayname()
console.log(Object.keys(tony)); // => Operadores
console.log(Object.values(tony)); // => Valores
console.log(tony.hasOwnProperty("nombre")); //Propiedad para evaluar valores dentro dele objeto
console.log(tony.hasOwnProperty("nacimiento"));


//operadores matematicos

/*

= 1 igual es asignacion de variable
== 2 iguales es comparacion de valores  <--- actualmente esto es una mala practica
=== 3 iguales es comparacion de tipo de dato y de valor <--- La buena practica te indica usar esto, esto es para verificar si es ESTRICTAMENTE igual al otro valor a comparar*/

let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);


console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/*Operadores de incremento y decremento*/

let i = 2;

// i = i +3; // es lo mismo
// i+=3; // forma correcta de declarar incrementos.

//operador unario;
i++; //incrementa el valor de 1 en 1.
console.log(i);


//Operadores logicos
/*
!-Not   Negacion, lo que es true lo convierte en false y visceversa
||- Or <-- alt gr +1 Cuando se tengan 2 o mas condiciones con que una se cumpla el OR podra validar.
&& - And */ //Cuando se tengan 2 o mas condiciones todas tienen que cumplirse para que el AND pueda validar, es decir ser verdaderas
console.log((9 === 9) || ("9" === 9)); //OR

console.log((9 === 9) && (9 === 9)); //AND

//Condicionales y Estructuras de control

let edad = 18;

if (edad >= 18) {
    document.write("Sos mayor de edad")
} else {
    document.write("Sos menor de edad")
}

//ejemplos con AND y OR
let hora = 19;

if (hora >= 0 && hora <= 5) {
    console.log("Dejame Dormir");

} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos dias");

} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");

} else {
    console.log("Buenas noches")
}

//Operator ternario (condicion) ? verdadero:falso; Basicamente es una simplificacion de if/else en unea linea de coddigo

let sosMayor = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(sosMayor);


//switch - case
/*Domingo - 0
Lunes - 1
Martes -2 
Miercoles -3
Jueves- 4
Viernes - 5
Sabado - 6
*/

let dia = 0;

switch (dia) {
    case 0:
console.log("Domingo");
        break;

        case 1:
        console.log("Lunes");

        break;

    case 2:
        console.log("Martes");

        break;

    case 3:
        console.log("Miercoles");

        break;

    case 4:
        console.log("Jueves");

        break;
  
    case 5:
        console.log("Viernes");

        break;

    case 6:
        console.log("Sabado");

        break;
    default:
        console.log("El dia no existe");
        break;

   
}
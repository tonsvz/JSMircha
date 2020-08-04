let nombre = "Tony";
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

//loops 

let contador = 0;
while (contador < 10) {
    console.log("While" + contador)
    contador++;

}

do {
    console.log("Do While" + contador);
} while (contador < 10);

/* for (inicializacion de la variable; condicion a evaluar; decremento o incremento){
    //sentencias que ejecutara el for

}*/

for (let i = 0; i < 10; i++) {
    console.log("for" + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
//Cabe destacar que la propiedad FOR es mas completa y actual que usar while y do while.

const tonsvz = {
    nombre: "Tony",
    apellido: "Veliz",
    edad: 30
}

for (const property in tonsvz) {
    console.log(`Key:${property}, Value:${tonsvz[property]}`);

}

//For In solo permite recorrer propiedades de un objeto


for (const element of numeros) {
    console.log(element);

}

let cadena = "Hello World";
for (const textElement of cadena) {
    console.log(textElement);

}

//For of permite recorrer todos los elementos de cualquier objeto que sea iterable en javascript

//Iteracion es recorrer un elemento, se podria considderar algo parecido a una revolucion de una llanta.

//Manejo de errores
try {
    console.log("En el try se agrega el codigo a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("catch captura cualquier error surgido o lanzado en el try");
    console.log(error);
} finally { //esta propiedad no es muy utilizada actualmente
    console.log("El bloque Finally se ejecutara siempre al final de un bloque try-catch");
}


try {
    let number = "this";
    if (isNaN(number)) { //is "NOT A NUMBER" evalua si lo introducido en la variaable es un numero o no
        throw new Error("El Caracter introducido no es un numero.") // Si no es un numero imprime este error
    }

    console.log(number * number); //Si es un numero, hace la operacion matematica con normalidad.
} catch (error) {
    console.log(`Se produjo el siguiente error:${error}`);

}

//Comentarios Git
/*
git init <= iniciar proyecto
git remote add origin *url* <== Enlazar proyecto
git clone *url* <= clonar proyecto existente


//Actualizar proyecto de repositorio
git fetch origin
git reset --hard origin/master
git pull <= opcional


//Commit y Push

git commit -a <= abre nueva ventana para ingresar comentario

git push origin master => hace el push dire

*/

/*Break y Continue*/ //cambios en laptop.


const theNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < theNumbers.length; i++) {
    if (i === 5) {
        break;

    }


    console.log(theNumbers[i]);
}

for (let i = 0; i < theNumbers.length; i++) {
    if (i === 5) {
        continue;

    }
    console.log(theNumbers[i]);
}

// Destructuracion clase

const destruc = [1, 2, 3]
// Sin Destructurar
let uno = destruc[0],
    dos = destruc[1],
    tres = destruc[2];
console.log(uno, dos, tres);

//Con Destructuracion

const [one, two, three] = destruc;
console.log(one, two, three);

////////////////////////////////////
    let person = {
        name: "tony",
        lastname: "veliz",
        age: 35
    }
let {
    name,
    lastname,
    age
} = person;
console.log(name, lastname, age);
////////////////////////////////////////

//Objetos literales, EC6
let nombrePerro = "Oslo",
edadPerro = 2;

const dog = {
    nombrePerro , edadPerro, raza:"callejero", ladrar(){
        console.log("guaaau guaaau guaaaau!")
    }, color:"blanco"
}

console.log(dog)
dog.ladrar();

// Parametros REST

function sumar(a,b,...c) {
    let result =  a + b ;
    c.forEach(function (n) {
        result += n 
        
    });

return result;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,4,5));
console.log(sumar(1,2,3,4,5));


//Operadores Spread

const arr1 = [1,2,3,4,5],
      arr2 = [5,6,7,8,9];
      

console.log( arr1,arr2);
const arr3 = [arr1,arr2] //=> crea 1 arreglo de 2 posiciones, es decir 2 arreglos internos (2)([1,2,3,4,5], [6,7,8,9,0])
const arr4 = [...arr1,...arr2] // => con este operador (...) unimos los 2 arreglos citados y formamos 1 arreglo con los elementos de los 2 anteriores (1) [1,2,3,4,5,6,7,8,9,0]
console.log(arr3);
console.log(arr4);

//... nos permite unir 2 o 3 arreglos a uno solo.
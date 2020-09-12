// let nombre = "Tony";
// let apellido = "Veliz"
// let saludo = new String("Hola Mundo")
// let lorem = "lorem lorem lorem lomem ipsum dolor dolor"
// let fullName = `Hola mi nombre es ${nombre} ${apellido}`; // Template string para concatenar mejor
// const c = Array.of("x", 2, true) //Nueva y actual manera de declarar arrays en EC5
// const d = Array(100).fill(true) //Nueva y actual manera de declarar arrays en EC5
// console.log(fullName);
// console.log(nombre, apellido, saludo);
// console.log(c);
// console.log(nombre.length, apellido.length, saludo.length, nombre.toUpperCase(), lorem.includes("dolor"), lorem.trim(), lorem.split(" "));
// console.log(c.length); //midde longitud del objeto
// console.log(d);

// const f = new Array(1, 2, 3, 4, true); //Antigua y obsoleta manera de declarar arrays.
// f.push("black") // agrega un elemento al final
// console.log(f);
// f.pop(); // elimina el ultimo elemento
// console.log(f);
// f.forEach((el, index) => { // metodo for.each
//     console.log(`<li id="${index}">${el}</li>`); //iteraciones.
// })


// //dentro de un objeto las variables se le conocen como propiedades y a las funciones se les conoce como metodos.
// const tony = {
//     pasatiempo: "jugar, programar",
//     nombre: "Tony",
//     apellido: "veliz",
//     edad: 30,
//     sayname: function () {
//         console.log(`Mi nombre es ${this.nombre}`);

//     }
// } //objeto
// console.log(tony); //objeto imprimido
// console.log(tony.edad); //forma de accesar a un atributo de objeto
// tony.sayname()
// console.log(Object.keys(tony)); // => Operadores
// console.log(Object.values(tony)); // => Valores
// console.log(tony.hasOwnProperty("nombre")); //Propiedad para evaluar valores dentro dele objeto
// console.log(tony.hasOwnProperty("nacimiento"));


// //operadores matematicos

// /*

// = 1 igual es asignacion de variable
// == 2 iguales es comparacion de valores  <--- actualmente esto es una mala practica
// === 3 iguales es comparacion de tipo de dato y de valor <--- La buena practica te indica usar esto, esto es para verificar si es ESTRICTAMENTE igual al otro valor a comparar*/

// let a = 5 + (5 - 10) * 3;
// let modulo = 5 % 2;

// console.log(a);
// console.log(modulo);


// console.log(7 == 7);
// console.log("7" == 7);
// console.log(0 == false);

// console.log(7 === 7);
// console.log("7" === 7);
// console.log(0 === false);

// /*Operadores de incremento y decremento*/

// let i = 2;

// // i = i +3; // es lo mismo
// // i+=3; // forma correcta de declarar incrementos.

// //operador unario;
// i++; //incrementa el valor de 1 en 1.
// console.log(i);


// //Operadores logicos
// /*
// !-Not   Negacion, lo que es true lo convierte en false y visceversa
// ||- Or <-- alt gr +1 Cuando se tengan 2 o mas condiciones con que una se cumpla el OR podra validar.
// && - And */ //Cuando se tengan 2 o mas condiciones todas tienen que cumplirse para que el AND pueda validar, es decir ser verdaderas
// console.log((9 === 9) || ("9" === 9)); //OR

// console.log((9 === 9) && (9 === 9)); //AND

// //Condicionales y Estructuras de control

// let edad = 18;

// if (edad >= 18) {
//     document.write("Sos mayor de edad")
// } else {
//     document.write("Sos menor de edad")
// }

// //ejemplos con AND y OR
// let hora = 19;

// if (hora >= 0 && hora <= 5) {
//     console.log("Dejame Dormir");

// } else if (hora >= 6 && hora <= 11) {
//     console.log("Buenos dias");

// } else if (hora >= 12 && hora <= 18) {
//     console.log("Buenas tardes");

// } else {
//     console.log("Buenas noches")
// }

// //Operator ternario (condicion) ? verdadero:falso; Basicamente es una simplificacion de if/else en unea linea de coddigo

// let sosMayor = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
// console.log(sosMayor);


// //switch - case
// /*Domingo - 0
// Lunes - 1
// Martes -2
// Miercoles -3
// Jueves- 4
// Viernes - 5
// Sabado - 6
// */

// let dia = 0;

// switch (dia) {
//     case 0:
//         console.log("Domingo");
//         break;

//     case 1:
//         console.log("Lunes");

//         break;

//     case 2:
//         console.log("Martes");

//         break;

//     case 3:
//         console.log("Miercoles");

//         break;

//     case 4:
//         console.log("Jueves");

//         break;

//     case 5:
//         console.log("Viernes");

//         break;

//     case 6:
//         console.log("Sabado");

//         break;
//     default:
//         console.log("El dia no existe");
//         break;


// }

// //loops

// let contador = 0;
// while (contador < 10) {
//     console.log("While" + contador)
//     contador++;

// }

// do {
//     console.log("Do While" + contador);
// } while (contador < 10);

// /* for (inicializacion de la variable; condicion a evaluar; decremento o incremento){
//     //sentencias que ejecutara el for

// }*/

// for (let i = 0; i < 10; i++) {
//     console.log("for" + i);
// }

// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }
// //Cabe destacar que la propiedad FOR es mas completa y actual que usar while y do while.

// const tonsvz = {
//     nombre: "Tony",
//     apellido: "Veliz",
//     edad: 30
// }

// for (const property in tonsvz) {
//     console.log(`Key:${property}, Value:${tonsvz[property]}`);

// }

// //For In solo permite recorrer propiedades de un objeto


// for (const element of numeros) {
//     console.log(element);

// }

// let cadena = "Hello World";
// for (const textElement of cadena) {
//     console.log(textElement);

// }

// //For of permite recorrer todos los elementos de cualquier objeto que sea iterable en javascript

// //Iteracion es recorrer un elemento, se podria considderar algo parecido a una revolucion de una llanta.

// //Manejo de errores
// try {
//     console.log("En el try se agrega el codigo a evaluar");
//     noExiste;
//     console.log("Segundo mensaje en el try");
// } catch (error) {
//     console.log("catch captura cualquier error surgido o lanzado en el try");
//     console.log(error);
// } finally { //esta propiedad no es muy utilizada actualmente
//     console.log("El bloque Finally se ejecutara siempre al final de un bloque try-catch");
// }


// try {
//     let number = "this";
//     if (isNaN(number)) { //is "NOT A NUMBER" evalua si lo introducido en la variaable es un numero o no
//         throw new Error("El Caracter introducido no es un numero.") // Si no es un numero imprime este error
//     }

//     console.log(number * number); //Si es un numero, hace la operacion matematica con normalidad.
// } catch (error) {
//     console.log(`Se produjo el siguiente error:${error}`);

// }

// //Comentarios Git
// /*
// git init <= iniciar proyecto
// git remote add origin *url* <== Enlazar proyecto
// git clone *url* <= clonar proyecto existente


// //Actualizar proyecto de repositorio
// git fetch origin
// git reset --hard origin/master
// git pull <= opcional


// //Commit y Push

// git commit -a <= abre nueva ventana para ingresar comentario

// git push origin master => hace el push dire

// */

// /*Break y Continue*/ //cambios en laptop.


// const theNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// for (let i = 0; i < theNumbers.length; i++) {
//     if (i === 5) {
//         break;

//     }


//     console.log(theNumbers[i]);
// }

// for (let i = 0; i < theNumbers.length; i++) {
//     if (i === 5) {
//         continue;

//     }
//     console.log(theNumbers[i]);
// }

// // Destructuracion clase

// const destruc = [1, 2, 3]
// // Sin Destructurar
// let uno = destruc[0],
//     dos = destruc[1],
//     tres = destruc[2];
// console.log(uno, dos, tres);

// //Con Destructuracion

// const [one, two, three] = destruc;
// console.log(one, two, three);

// ////////////////////////////////////
// let person = {
//     name: "tony",
//     lastname: "veliz",
//     age: 35
// }
// let {
//     name,
//     lastname,
//     age
// } = person;
// console.log(name, lastname, age);
// ////////////////////////////////////////

// //Objetos literales, EC6
// let nombrePerro = "Oslo",
//     edadPerro = 2;

// const dog = {
//     nombrePerro,
//     edadPerro,
//     raza: "callejero",
//     ladrar() {
//         console.log("guaaau guaaau guaaaau!")
//     },
//     color: "blanco"
// }

// console.log(dog)
// dog.ladrar();

// // Parametros REST

// function sumar(a, b, ...c) {
//     let result = a + b;
//     c.forEach(function (n) {
//         result += n

//     });

//     return result;
// }
// console.log(sumar(1, 2));
// console.log(sumar(1, 2, 3, 4));
// console.log(sumar(1, 2, 4, 5));
// console.log(sumar(1, 2, 3, 4, 5));


// //Operadores Spread

// const arr1 = [1, 2, 3, 4, 5],
//     arr2 = [5, 6, 7, 8, 9];


// console.log(arr1, arr2);
// const arr3 = [arr1, arr2] //=> crea 1 arreglo de 2 posiciones, es decir 2 arreglos internos (2)([1,2,3,4,5], [6,7,8,9,0])
// const arr4 = [...arr1, ...arr2] // => con este operador (...) unimos los 2 arreglos citados y formamos 1 arreglo con los elementos de los 2 anteriores (1) [1,2,3,4,5,6,7,8,9,0]
// console.log(arr3);
// console.log(arr4);

// //... nos permite unir 2 o 3 arreglos a uno solo.


// //arrow functions ()=>{}

// //Diferencias
// //Cuando una funcion flecha no recibe parametros es obligatorio el uso de las llaves {}
// const salute1 = () => {
//     console.log("Hola Tony1");
// }
// salute1()

// //cuando una funcion flecha recibe parametros puede ejecutarse sin el parentesis () de los parametros y sin las llaves {}
// const salute = name => console.log(`Hola ${name}`);
// salute("tony");


// const add1 = function (a, b) {
//     return a + b
// }
// console.log(add1(3, 3), "using normal function"); //Manera clasica de declarar funciones

// const add = (a, b) => a + b;
// console.log(add(2, 3), "using arrow function () =>  "); // Manera usando Arrow Functions, () Los parentesis de parametros solo se omiten si se ingresa 1 solo parametro, mas de 1 necesitara usarse parentesis, pero pueden seguir omitiendose las llaves {}.

// const variousLettersFunction = () => { // Con mas de 3 lineas de comando se necesitara usar {} obligatoriamente.
//     console.log("one");
//     console.log("two");
//     console.log("three");
// }

// variousLettersFunction();

// const numberArray = [0, 1, 2, 3, 4]
// numberArray.forEach((el, index) => console.log(`El elemento ${el} esta en la posicion ${index}`));

// const perro = {
//     name: "Oslo",
//     bark() {
//         console.log(this);
//     }
// }

// perro.bark()

//las arrow function tienen la capacidad de saltar el contexto en el que se encuentran (en este caso el objeto) y heredar o reconocer el contexto en donde se encuentra su objeto padre donde ha sido declarado.

//Protoipos

//POO => Acronimo de Programacion Orientada a Objetos
/*
Clases - Modelo a seguir
Objetos - Es una instancia de clase
Atributos - Es una caracteristica o propiedad dele objeto, son variables dentro de un objeto
Metodos - Son las acciones que un objeto puede realizar.*/

//Prototipo es un mecanismo por el cual un objeto puede heredar atributos y metodos (ahi la importancia de los conceptos mencionados ^) de un objeto padre

// const animal = {
//     name:"Rex",
//     sound(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }

// const animal2 = {
//     name:"Zeus",
//     sound(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }


// console.log(animal);
// console.log(animal2);



//Funcion Constructora

// function Animal(nombre, genero) {
//    // Atributos
//     this.nombre = nombre;
//     this.genero = genero;
//    // Metodos
//     this.sonar = function () {
//         console.log("Hago sonidos porque estoy vivo");

//     }
//     this.saludar = function () {
//         console.log(`Hola me llamo ${this.nombre}`);

//     }
// }

// const snoopy = new Animal("Snoopy", "Macho"),
// lolaBunny = new Animal ("Lola Bunny", "Hembra")

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();

// lolaBunny.sonar();
// lolaBunny.saludar();


//Codigo Optimizado, funcion constructora donde se asisgnan los metodos al prototipo, no a la funcion como tal.
//Funcion Constructora Optimizada donde asignamos los metodos al prototipo y no a la funcion como tal.

// function Animal(nombre, genero) {
//     Atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }
// Metodos agregados al prototipo de la funcion constructora.
//     Animal.prototype.sonar = function () {
//         console.log("Hago sonidos porque estoy vivo");

//     }
//     Animal.prototype.saludar = function () {
//         console.log(`Hola me llamo ${this.nombre}`);

//     }

//     Herencia Prototipal
//     function Perro(nombre, genero, tamanio) {
//         this.super= Animal;
//         this.super(nombre,genero);
//         this.tamanio = tamanio;
//     }

//     Perro esta heredando  de Animal
//     Perro.prototype = new Animal();
//     Perro.prototype.constructor = Perro;

//     Sobreescritura dele prototipo padre en hijo;
//     Perro.prototype.sonar = function () {
//         console.log("Soy un perro y ladro");

//     }

//     Perro.prototype.ladrar = function () {
//         console.log("Guau Guau x3");

//     }



// const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
// lolaBunny = new Animal("Lola Bunny", "Hembra")

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();
// snoopy.ladrar();

// lolaBunny.sonar();
// lolaBunny.saludar();

// class randomPeople {
//     constructor(name,gender) {
//         this.name = name;
//         this.gender = gender;


//     }

//     //methods

//     voice() {
//         console.log("hello,this is my voice");

//     }

//     salute(){
//         console.log("and this is how i say hello to you");
//     }



// }

// class personData extends randomPeople {
//     constructor(name,gender,id){
//         //super es un metodo que manda a llamar el constructor de la clase padre.
//         super(name,gender)
//         this.id = id;
//         this.edad = null;

//     }

//     likes(){
//         console.log("Me gusta la buena musica");
//     }

//     static gustos(){
//         console.log("Me gusta escuchar rock y quiero aprender a ser un buen programador");
//     }

//     //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

//     get Edad(){
//         return this.edad;

//     }

//     set Edad(edad){
//         this.edad = edad;
//     }

// }

// personData.gustos();

// const ppl1 = new personData("Tony Veliz", "Male", "18946281"),
// ppl2 = new randomPeople ("Carlos", "Male")


// console.log(ppl1);
// ppl1.voice();
// ppl1.salute();

// console.log(ppl2);
// ppl2.voice();
// ppl2.salute();
// personData.Edad = 30;
// console.log(personData.Edad);

//Objeto Console

// console.log(console);
// console.error("Esto es un Error");
// console.warn("Esto es un Aviso");
// console.info("Esto es un mensaje informativo")
// console.log("Log es como un registro de lo que ha sucedido en nuestra aplicacion")

// let nombre = "Tony",
//     apellido = "Veliz",
//     edad = 30;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// console.log(nombre, apellido, edad);
// console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años. `);
// console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

// console.clear(); //<-- Limpia la consola por completo

// console.log(window);
// console.log(document); //<= Document es la representacion del documento HTML a traves de JS.
// console.dir(document)
// console.dir(document)
// console.clear();
// console.group("Cursos de @Jonmircha en Youtube");
// console.log("Curso de JavaScript");
// console.log("Curso de NodeJS");
// console.log("Curso de Flexbox");
// console.groupEnd();

// console.log(console);
// console.table(Object.entries(console).sort()) //<= Muestra una tabla y array con los elementos de la consola, la propiedad .sort ordena de manera alfabetica los elementos de la consola.

// const numeros = [1, 2, 3, 4, 5, 0],
//     vocales = ["a", "e", "i", "o", "u"];

// console.table(Object.entries(numeros));
// console.table(Object.entries(vocales));

// const persona = {
//     name: "Tony",
//     lastname: "Veliz",
//     age: 30
// }
// console.table(persona)
// console.clear();

// console.time("Cuanto tiempo tarda mi code?") //<= saber cuanto demora en ejecutarse un bloque de codigo

// const arreglo = Array(100000);
// for (let i = 0; i < arreglo.length; i++) {
//     arreglo[i] = i;

// }

// console.timeEnd("Cuanto tiempo tarda mi code?");//<= saber cuanto demora en ejecutarse un bloque de codigo
// // console.log(arreglo)

// console.clear();
// //contador de iteraciones
// for (let i = 0; i <= 100; i++) {
//     console.count("Codigo for")
//     console.log(i);

// }
// console.clear()

// let x = 1, 
// y = 2,
// testXY = "Se espera que X siempre sea menor que Y";

// console.assert(x<y,{x,y,testXY});

// //<= Assert hace una comparacion y como se nota aca, si es correcto no lanzara error, si la condicion X es mayor a Y assert lanzara un error porque no se cumple la condicion de "Se espera que X sea menor que Y"

// //Objeto date

// console.clear

// console.log(Date());
// let fecha = new Date();
// console.log(fecha);//
// //dia del mes
// console.log(fecha.getDate());
// //dia de la semana D L M M J V S => 0 1 2 3 4 5 6
// console.log(fecha.getDay());
// //mes Jan Feb Mar Abr May Jun Jul Aug Sep Oct Nov Dec => 0 1 2 3 4 5 6 7 8 9 10 11
// console.log(fecha.getMonth());
// //Año
// console.log(fecha.getFullYear());// Desde el Y2K el metodo getYear esta deprecated, usar getFullYear
// //Este metodo representa 120 (si estamos en el 2020) porque cuenta desde el año 1900 hasta el año actual.
// console.log(fecha.getYear());

// console.log(fecha.getHours());
// console.log(fecha.getMinutes()); 
// console.log(fecha.getSeconds());
// console.log(fecha.toString());
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleString());


// console.clear();


// //Objeto MATH
// console.log(Math); //objeto Math
// console.log(Math.PI);//Valor de PI
// console.log(Math.abs(7.8)); // valor absoluto
// console.log(Math.ceil(7.8));//Redondea el numero a entero mayor.
// console.log(Math.floor(7.2));//Redondea  el numero a entero menor
// console.log(Math.round(7.5)); // Clasica manera de redondear, apartir de 0.5 se considera el siguiente numero
// console.log(Math.sqrt(81));//Raiz Cuadrada
// console.log(Math.pow(2,5));//Potencias (el primer numero es la base, el segundo el exponente)
// console.log(Math.random()); // Crea un numero aleatorio entre 0 y 1
// console.log(Math.random() * 1000);//le indica que el numero aleatorio se comprende entre 0 y 1000
// console.log(Math.round(Math.random() * 1000));//Redondea el numero entre 0 y 1000


// /* Cortocircuito OR - Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto

// Caso Contrario

// Cortocircuito AND - Cuando el valor de la izquierda en la expresion siempre pueda valirdar a false, es el valor que se cargara por defecto*/
// console.clear();

// function saludar(nombre) {
//     nombre = nombre && "Desconocido"
//     console.log(`Hola ${nombre}`);
      
// }

// console.log();
// saludar("Tony")
// saludar();
// console.log(true && false);

// console.clear();

// //alerts, confirms y prompts.
// //alert("This is an alert.");
// //confirm("This is a confirmation.");
// //prompt("This is a prompt");

// let alerta = alert("This is an alert"),
// confirmacion = confirm("This is a confirmation"),
// aviso = prompt("This is a prompt");

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

//Expresiones Regulares 
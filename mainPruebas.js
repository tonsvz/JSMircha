//// class Espresso{
//     constructor(coffee,portafilter,water){
//         this.Coffee = coffee;
//         this.Portafilter=portafilter;
//         this.Water=water;
//     }

//     process(){ .asd
//         console.log(`Agregamos 9gr de cafe ${this.Coffee} molienda fina en el portafiltro marca ${this.Portafilter} y 18gr de agua ${this.Water} durante un tiempo de ${Tony.getTiempo} de extraccion`);
//     }

// }

// class Barista extends Espresso{
//     constructor(coffee,portafilter,water,barista){
//         super(coffee,portafilter,water)
//         this.Barista = barista;
//         this.Tiempo = null
//     }

//     get getTiempo(){
//         return this.Tiempo
//     }

//     set setTiempo(Tiempo){
//         this.Tiempo = Tiempo
//     }


// }

// const Tony = new Barista ("Rio Intag", "La Marzocco", "Tesalia", "Tony  Veliz");

// console.log(Tony);
// Tony.setTiempo ="20 a 30s";
// Tony.process();

// (function name(d,w,c) {
//     w.log(d);
//     w.log(c);
//     w.log(w);
// })(document,console,window) // Funcion Anonima Autoejecutable.
//lets rocck

// let stringToArray = (string="", text="") => {
//     if (!string) 
//         return console.log("Debes ingresar un texto a evaluar");
//     if (!text) 
//         return console.log("Debes ingresar un texto a evaluar");

//         string = string.toLocaleLowerCase();
//         text = text.toLocaleLowerCase();


// let i = 0,
//     counter= 0;

//     while (i!==-1) {
//         i=string.indexOf(text,i)
//         if (i!==-1) {
//             i++
//             counter++
//         }
//     }

//     return console.log(`La palabra ${text} se repite ${counter} veces`);

// }



// class person {
//     constructor(name, age) {
//         this.age = age;
//         this.name = name;
//     }

//     salute() {
//         console.log(`Hello im ${this.name} and my age is ${this.age} and im a ${tony.getSex}`);
//     }


// }

// class job extends person {
//     constructor(name, age, job) {
//         super(name, age);
//         this.job = job
//         this.sex = null;
//     }

//     get getSex() {
//         return this.sex;
//     }

//     set setSex(sex) {
//         this.sex = sex;
//     }
// }

// let tony = new job("Antony", "20", "Developer");
// tony.setSex = "Male"
// tony.salute();

// class weed {
//     constructor(type,color){
//         this.type= type;
//         this.color = color;
//     }

//     high(){
//         console.log(`Im a ${this.type} weed and my color is ${this.color}`);
//     }
//         }

//         let marihuana = new weed("Sativa", "Green/Blue")
//     marihuana.high();




// const factorial = (number=undefined) => {
//     if(number===undefined) return console.error("Se debe ingresar un numero para evaluar");
//     if(typeof number !=="number") return console.error("Solo se permiten numeros para evaluar");
//     if(number===0) return console.error("No se puede evaluar factorial de 0");
//     if(Math.sign(number)===-1) return console.error("No se puede evaluar numeros negativos");

//     let factorial = 1;

//     for (let i = number; i >1 ; i--) {
//         factorial*=i;

//     }

//     return console.log(`El factorial de ${number} es ${factorial}`);   

// }

// factorial(5)


//Programa una funcion para convertir grados Celsius a Farenheit y visceversa

// const convertidorGrados = (grados = undefined, unidad = undefined) => {
//     if(grados === undefined) return console.warn("No ingresaste grados a convertir");
//     if(typeof grados !=="number") return console.error(`El valor de ${grados} ingresado, NO es un numero`);

//     if(unidad=== undefined) console.warn("No ingresaste el tipo de grado a convertir");
//     if (typeof unidad !=="string") return console.error(`El valor ${unidad} ingresado, NO es una cadena de texto`);

//     if(unidad.length !==1 || !/(C|F)/i.test(unidad)) return console.warn("El valor de unidad no es Reconocido");

//     if (unidad === "C"|| unidad ==="c") {
//         return console.info(`${grados}ºC =${Math.round(grados * (9/5)+32)}ºF`)
//     }else if (unidad === "F"|| unidad ==="f"){
//         return console.info (`${grados}ºF = ${Math.round((grados-32) * (5/9))}ºC`)
//     }
//     console.info("funciono")
// }

// convertidorGrados()
// convertidorGrados(100,"c")
// convertidorGrados(100,"F")

//calculador de Potencias
// switch (prompt("Como esta el clima?")) {
//     case "Lluvioso":
//         console.log("Recuerda salir con paraguas");
//         break;

//     case "Soleado":
//         console.log("Recuerda usar protector solar");
//         break;

//     case "Mardiciado":
//         console.log("Recuerda mandar a joder a todo mundo");
//         break;
// }


//Con ciclo While
// let multTimes = (number, pow, counter, multiP) => {
//     while (counter < pow) {
//         multiP *= number;
//         counter++
//     }
//     console.log(multiP);
// }

// multTimes(4, 4, 0, 1)

//Con ciclo for

// multTimes2 = (number, pow) => {
//     let multiP = 1;
//     for (let counter = 0; counter < pow; counter++) {
//         multiP *= number
//     }

//     console.log(multiP);
// }

// multTimes2(2, 10)

// loopFinder = () => {
//     for (let number = 20;; number++) {
//         if (number % 7 === 0) {
//             console.log(number);
//             break;
//         }
//     }
// }
// loopFinder()

// hashPyramid = (hash, times) => {
//     for (let counter = 0; counter < times; counter++) {
//         console.log(hash);
//         hash = hash + "#";
//     }
// }

// hashPyramid("#", 7)

//Fizz Buzz
// let fizzBuzz = () => {
//     for (let counter = 1; counter < 100; counter++) {
//         if (counter % 3 === 0) {
//             console.log(counter + " Fizz");
//         } else if (counter % 5===0) {
//             console.log(counter + " Buzz");
//         }else if (counter % 15){
//             console.log(counter + " FizzBuzz")

//         }else{
//             console.log(counter)
//         } 
//     }
// }
// fizzBuzz();

// calcPow = (number, pow, mult = 1) => {
//     for (let i = 0; i < pow; i++) {
//         mult = mult * number;
//     }
//     console.log(mult);
// }

// calcPow(2, 10)

// calcPow2 = (number, pow) => {
//     let multP = 1,
//         i = 0;
//     while (i < pow) {
//         multP = multP * number
//         i++
//     }
//     console.log(multP);
// }

// calcPow2(2, 10)

// Scope Global / Local

// let x = 20;
// if (true) {
//     let y = 30;
//     var z = 50
//     console.log(x + y + z);
//     console.log(y)
// }
// console.log(x)
// console.log(z)

// const breaking = () => {
//     for (let number = 20;; number++) {
//         if (number % 7 === 0) {
//             console.log(number);
//             break;
//         }
//     }
// }

// breaking()

//Recipe Cheesecake 

// const cheesecakeRecipe = (number) => {
//     const recipe = (cantidad, unidad, ingrediente) => {
//         let cantidadFinal = cantidad * number;
//         if (cantidadFinal > 1000) {
//             unidad = "Kg"
//             cantidadFinal /= 1000;
//             unidad += "s";
//         } else if (number > 1) {
//             unidad += "s";
//         }
//         console.log(`${cantidadFinal} ${unidad} de ${ingrediente}`)
//     }
//     console.log(`Receta para ${number} Cheesecake`)
//     recipe(250, "Gr", "Galleta Maria Molida")
//     recipe(130, "Gr", "Mantequilla sin Sal")
//     recipe(2, "Cucharada", "Azucar")
//     recipe(4, "Paquete", "Queso Crema a Temperatura Ambiente")
//     recipe(1, "1/4", "Taza de leche Condensada")
//     recipe(1, "Taza", "Jugo de limon")
//     recipe(1, "Cucharadita", "Extracto de Vainilla")
// }

// cheesecakeRecipe(5)
// function addTester (x) {
//     return function(){
//             return x*x
//     }
// }

// tester1 = addTester(5)
// tester2 = addTester(10)

// console.log(tester1(5))
// console.log(tester2(10))
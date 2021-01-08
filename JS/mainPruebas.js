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

// const tresLeches = (quantity) => {
//     const recipe = (cantidad,unidad,ingrediente) => {
//         let totalIngredients = quantity * cantidad;
//         if (totalIngredients > 1000){
//             unidad = "Kg"
//             totalIngredients/= 1000;
//             unidad = unidad + "s"

//         }else if(quantity> 1){
//             unidad = unidad + "s"

//         }else if(cantidad > 1){
//             unidad = unidad + "s"
//         }
//         console.log(`${totalIngredients} ${unidad} ${ingrediente}`)
//     }
//     console.warn(`Receta para ${quantity} Tres Leches`);
//     console.warn("Para el Bizcocho");
//     recipe(4,"huevo","")
//     recipe(150,"Gr","Azucar")
//     recipe(1,"Cucharadita","Esencia de Vainilla")
//     recipe(95,"Gr","Harina de Trigo Todo uso")
//     console.warn("Para la Crema");
//     recipe(410,"Gr","Leche Evaporada")
//     recipe(370,"Gr","Leche Condensada")
//     recipe(370,"Gr","Crema de Leche")
//     console.warn("Para el Merengue")
//     recipe(125,"Gr","Claras de Huevo")
//     recipe(250,"Gr","Azucar")
//     recipe(2,"Cucharadita","Cremor Tartaro")
//     recipe(1,"Cucharadita","Sal")
//     console.warn("Precalentar el horno a 180°C. Preparar un molde o refractario de 24x31 cm de diámetro con spray antiadherente o mantequilla derretida. Apartar")
//     console.warn("Separar las claras de las amarillas de los huevos para hacer el bizcocho. Colocar las 4 claras en un bowl y mezclar con la batidora a velocidad media hasta que se vea como una especie de espuma blanca y haya levantado. Agregar el azúcar y seguir batiendo hasta que se tenga una mezcla blanca y brillante.");
//     console.warn("Reducir la velocidad y agregar las yemas de huevo y la vainilla, mezclándose hasta que se incorporen");
//     console.warn("Retirar de la batidora y agregar la harina en 2-3 partes con una espátula de goma en movimientos envolventes. Tener cuidado de no mezclar en exceso sino justo hasta que la harina se haya incorporado y no se vean grumos.");
//     console.warn("Verter la mezcla en un molde de vidrio o porcelana y hornear por 20 minutos o hasta observar que la superficie se ha dorado y que cuando se introduce un palillo de madera en el medio del bizcocho, este salga limpio.");
//     console.warn("Mientras el bizcocho se hornea, colocar en la licuadora las tres leches y mezclarlas hasta que se hayan unido.");
//     console.warn("Al retirar el bizcocho del horno, abrir huequitos por toda la superficie del mismo con un tenedor, esto permitirá que las tres leches penetren y se distribuyan por toda la torta.");
//     console.warn("Verter las tres leches previamente mezcladas poco a poco y equitativamente por toda la superficie de la torta. A medida que se vaya agregando el líquido, esperar que el bizcocho lo vaya absorbiendo.");
//     console.warn("Cocinar las claras y el azúcar a Baño María hasta que alcancen 55-59 grados centígrados (si no se tiene un termómetro de cocina, este punto será en el que se observe que el azúcar se ha diluido por completo en el huevo y no se vean grumos), hay que remover constantemente o de lo contrario la clara se cocinará.");
//     console.warn("En un bowl limpio y seco de una batidora vaciar la mezcla de huevo y azúcar y agregar el cremor tártaro. Batir en velocidad media-rápida hasta que se vea brillante, sedoso y al levantar las varillas de la batidora se hagan picos que se mantienen sin caerse. Otro buen indicador de que el merengue está listo es que al tocar el bowl, ya no se siente caliente sino a temperatura ambiente. Se debe tener cuidado de no batir demasiado, ya que esto puede hacer que pierda su textura.");
//     console.warn("Colocar el merengue en una manga de repostería con la boquilla de decoración de preferencia y realizar copitos por toda la superficie de la torta, también se puede colocar todo el merengue encima de la torta y esparcirlo con la ayuda de una espátula de repostería, como hice yo. Se puede volver a meter la torta decorada al horno en el ajuste de gratinado por 5 minutos o un soplete de cocina para tostar la superficie del merengue.");
//     console.warn("Dejar enfriar al menos 3 horas o preferiblemente durante toda la noche.");
// }

// tresLeches(3)

// let ceros  = (number,amplitud) => {
//     let string = String(number);
//     while(string.length < amplitud){
//         string = "0" + string
//     }
//     return string
// }

// let farmInventory = (cows,chickens,pigs) => {
//     console.log(`${ceros(cows,3)} Vacas`)
//     console.log(`${ceros(chickens,3)} Pollos`)
//     console.log(`${ceros(pigs,3)} Cerdos`)
// }

// farmInventory(3,4,5)

// minDetect = (number1,number2) => {
//     console.log(`El numero menor comparando ${number1} con ${number2} es ${Math.min(number1,number2)}`)

// }

// minDetect(100,300);
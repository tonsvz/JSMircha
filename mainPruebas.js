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

// class Espresso{
//     constructor(coffee,portafilter,water){
//         this.Coffee = coffee;
//         this.Portafilter=portafilter;
//         this.Water=water;
//     }

//     process(){
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


let stringArray = (string = "", text ="") => {
    if(!string) return console.warn("No ingresaste un texto largo");

    if(!text) return console.warn("No ingresaste la palabra a evaluar");
    let i=0
    counter = 0;
    while (i !== -1) {
        i = string.indexOf(text, i);
        if (i !==-1) {
            i++;
            counter++;
        }
    }
return console.info(`La palabra ${text} se repite ${counter} veces`)
}

stringArray();
stringArray("Hola mundo mundo mundo", "mundo" )



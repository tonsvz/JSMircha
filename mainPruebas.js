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


let stringToArray = (string="", text="") => {
    if (!string) 
        return console.log("Debes ingresar un texto a evaluar");
    if (!text) 
        return console.log("Debes ingresar un texto a evaluar");

        string = string.toLocaleLowerCase();
        text = text.toLocaleLowerCase();

    
let i = 0,
    counter= 0;

    while (i!==-1) {
        i=string.indexOf(text,i)
        if (i!==-1) {
            i++
            counter++
        }
    }

    return console.log(`La palabra ${text} se repite ${counter} veces`);

}



class person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    salute() {
        console.log(`Hello im ${this.name} and my age is ${this.age} and im a ${tony.getSex}`);
    }


}

class job extends person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job
        this.sex = null;
    }

    get getSex() {
        return this.sex;
    }

    set setSex(sex) {
        this.sex = sex;
    }
}

let tony = new job("Antony", "20", "Developer");
tony.setSex = "Male"
tony.salute();

class weed {
    constructor(type,color){
        this.type= type;
        this.color = color;
    }

    high(){
        console.log(`Im a ${this.type} weed and my color is ${this.color}`);
    }
        }

        let marihuana = new weed("Sativa", "Green/Blue")
    marihuana.high();


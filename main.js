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
f.forEach((el, index) => {
console.log(`<li id="${index}">${el}</li>`); //iteraciones.
})

const tony = {pasatiempo: "jugar, programar", nombre: "Tony", apellido:"veliz", edad:30} //objeto
console.log(tony);//objeto imprimido
console.log(tony.edad);//forma de accesar a un atributo de objeto
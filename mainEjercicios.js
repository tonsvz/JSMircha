const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")
const button3 = document.querySelector(".btn3")
const button4 = document.querySelector(".btn4")

button1.addEventListener("click", () => {
    alert("Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion (Hola Mundo) devolverá 10.")
    let valor = prompt("Inserte un texto a evaluar");
    ex01(valor)
})

button2.addEventListener("click", () => {
    alert("Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion (Hola Mundo, 4) devolverá: Hola")
    let str = prompt("Inserte un texto a evaluar");
    let cropText = prompt("Ingrese cantidad de caracteres a recortar")
    ex02(str, cropText)

})
button3.addEventListener("click", () => {
    alert("Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']")
    let string = prompt("Inserte un texto a evaluar")
    let separador = prompt("Ingrese la cantidad de separadores")
})
button4.addEventListener("click", () => {
    alert("Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.")
    prompt("Insere un texto a evaluar")
})

//funciones a ejecutar
//Ejercicio 01

const ex01 = (string) => {
    if (typeof string != "string") {
        alert("Ingrese un valor con caracteres para ser evaluado")
    } else {
        alert(`El numero de caracteres que contiene el valor ingresado es ${string.length}.`)
    }
}

//Ejercicio 02

const ex02 = (str, cropText) => {

    if (typeof str != "string"){

        alert("Es necesaria una cadena de texto")
    }else{
        cropText = cropText * 1
        if (cropText != "number") {
            return alert (`El resultado recortado es ${str.substr(0,cropText)}`)
        }
    }

    }
        //Revisar urgentemente la documentacion de MDN Dev Network acerca de String.substr para entender su funcionamiento.       if (typeof str != 'string') {

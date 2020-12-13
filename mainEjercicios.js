const button1 = document.querySelector(".btn1"); //Botones
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");
const button6 = document.querySelector(".btn6")
const button7 = document.querySelector(".btn7");



button1.addEventListener("click", () => {
    alert("Porfavor ingresar un cadena de ciertos caracteres para que puedan ser evaluados y retorne la cantidad de caracteres que estan presentes")
    let value = prompt("Ingrese una cadena de caracteres para evaluarse")
    ex1(value)
})


button2.addEventListener("click", () => {
    alert("Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion (Hola Mundo, 4) devolverá: Hola")
    let txt = prompt("Inserte un texto a evaluar")
    cropText = prompt("Ingrese un valor para que se aplique y se recorte en la cadena de texto")
    ex2(txt, cropText)
})

button3.addEventListener("click", () => {
    alert("Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']")
    let textToArray = prompt("Ingrese texto a evaluar")
    ex3(textToArray)
})

button4.addEventListener("click", () => {
    alert("Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.")
    let redo = prompt("Ingrese una cadena texto para repetir")
    let counter = prompt("Ingrese el numero de repeticiones")
    ex4(redo, counter)
})

button5.addEventListener("click", () => {
    alert("Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion(Hola Mundo) devolverá odnuM aloH")
    let str = prompt("ingrese")
    ex5(str)
})

button6.addEventListener("click", () => {
    alert("Programa una funcion que dado un string ingresado detecte cuantas veces se repite en un texto")
    let string = prompt("Ingrese una cadena de texto a evaluar")
    let text = prompt("ingrese una palabra para encontrar");
    ex6(string,text)
})

button7.addEventListener("click",() => {
    alert("Programa una funcion que detecte si un string es palindromo")
    let word = prompt("Ingrese una palabra")
    ex7(word)
})

//funciones
let ex1 = (string = "") => {
    if (!string) {
        alert("Unicamente caracteres son aceptados")
    } else {
        alert(`La palabra ${string.toUpperCase()} contiene  ${string.length} caracteres`)
    }
}

let ex2 = (txt, cropText) => {
    alert(`El resultado recortado es ${txt.substr(0,cropText)}`)
}

let ex3 = (textToArray) => {
    answer = textToArray.split(" ")
    console.log(answer);
    return alert("Observa por consola el resultado.")
}

let ex4 = (redo, counter) => {
    repeat = redo.repeat(counter)
    alert(`Este es el texto repetido ${repeat}`)
}


let ex5 = (str = "") => {
    if (!str) {
        alert("Unicamente caracteres son permitidos")
    } else {
        reverse = str.split("").reverse("").join("");
        alert(`El resultado invertido es ${reverse.toUpperCase()}`)
    }

}

let ex6 = (string ="",text="") => {
    if(!string)
    return console.warn("Debes ingresar un texto para ser evaluado")
    if(!text)
    return console.warn("Debes ingresar una palabra para ser encontrar")

    string = string.toLowerCase();
    text = text.toLowerCase();

    let i = 0,counter = 0;

    while (i!==-1) {
        i = string.indexOf(text,i)

        if (i!==-1) {
            i++
            counter++
        }
    }

    return alert(`La palabra o letra ${text} se encontro ${counter} veces en el texto ingresado.`)
} 



let ex7 = (word = "") => {
    if (!word) {
        alert("Ingrese una funcion a evaluar");

    }
    word = word.toLowerCase();

    let backwardWord = word.split("").reverse().join("");
    if (word === backwardWord) {
        alert(`La palabra ${word} SI es un palindromo`)
    } else {
        alert(`La palabra ${word} NO un palindromo`)

    }

}




//Revisar urgentemente la documentacion de MDN Dev Network acerca de String.substr para entender su funcionamiento.       if (typeof str != 'string') {
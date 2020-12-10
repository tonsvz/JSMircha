const button1 = document.querySelector(".btn1");//Botones
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");

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


        let ex5 = (str="") => {
            if (!str) {
                alert("Unicamente caracteres son permitidos")
            } else {
                reverse = str.split("").reverse("").join("");
                alert(`El resultado invertido es ${reverse.toUpperCase()}`)
            }

        }






        //Revisar urgentemente la documentacion de MDN Dev Network acerca de String.substr para entender su funcionamiento.       if (typeof str != 'string') {
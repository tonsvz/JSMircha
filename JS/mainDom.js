// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('card'))
// console.log(document.getElementsByName('nombre'))
// console.log(document.getElementById('menu'))
// console.log(document.querySelector('#menu'))
// console.log(document.querySelector('a')) //QuerySelector solo trae el primer selector del tipo ingresado que haya encontrado en el documento HTML, si quiero traerlos todos, debo usar querySelectorAll
// console.log(document.querySelectorAll('a'))
// console.log(document.querySelectorAll('a')[2])
// console.log(document.querySelectorAll('a').length)
// document.querySelectorAll('a').forEach((el)=>console.log(el))
// console.log(document.querySelector('#menu li'));
// console.log(document.querySelectorAll('#menu li'));

// console.log(document.documentElement.lang)
// console.log(document.querySelector('.link-dom').href);
// console.log(document.querySelector('.link-dom').getAttribute('href'));
// document.documentElement.lang = "es";

// const $linkDOM = document.querySelector('.link-dom')
// $linkDOM.setAttribute("target","_blank")
// $linkDOM.setAttribute("href","https://www.wokine.com/")
// $linkDOM.setAttribute("rel","noopener")
// console.log($linkDOM.hasAttribute('rel'));
// $linkDOM.removeAttribute('rel')
// console.log($linkDOM.getAttribute('data-description'))
// console.log($linkDOM.dataset)
// console.log($linkDOM.dataset.description)
// $linkDOM.setAttribute("data-id","2")
// console.log($linkDOM.dataset)
// console.log($linkDOM.dataset)
// $linkDOM.addEventListener("click",() => {
//     $linkDOM.setAttribute("data-description","da DOM")
// })

//Variablese CSS-  CUSTOM PROPERTIES**
// const $html = document.documentElement,
// $body = document.body;

// let darkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
// yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// // console.log(darkColor,yellowColor);

// $body.style.backgroundColor = yellowColor;
// $body.style.color = darkColor;

// $html.style.setProperty("--dark-color","pink")
// darkColor = getComputedStyle($html).getPropertyValue("--dark-color")
// $body.style.setProperty("background-color",darkColor)

// //ClassList
// const $card = document.querySelector(".card");
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"))
// $card.classList.add("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// console.log($card.classList);
// $card.classList.remove("rotate-45")
// $card.classList.toggle("rotate-45")
// $card.classList.replace("rotate-45","rotate-135")
// $card.classList.add("opacity-80","sepia")

//DOM TEXTO Y HTML

// const $whatIsDOM= document.getElementById("que-es");
// let text = `
//     <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un
// API para documentos HTML y XML.
//     </p>
//     <p>
//     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//         <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
// `
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;

//Traversing DOM, Recorriendo
//
// let $cards = document.querySelector(".cards")
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[3]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling)
// console.log($cards.closest("div"))
// console.log($cards.closest("body"))
// console.log($cards.children[3].closest("section"))

// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"),
//   $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure");

// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);
// //De esta manera JS no detecta los atributos como Nodos ya que solo es texto
// $figure2.innerHTML = `<img src = "https://placeimg.com/200/200/tech" alt="People"><figcaption>Tech</figcaption>`;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//   $ul = document.createElement("ul");

// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild($ul);
// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
//   $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
//   ],
//   $ul3 = document.createElement("ul");
// $fragment = document.createDocumentFragment();

// meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });
// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

//Templates HTML

// const $cards2 = document.querySelector(".cards"),
//   $template2 = document.querySelector("#templateCard").content,
//   $fragment2 = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/people",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/nature",
//     },
//   ];

// cardContent.forEach((el) => {
//   $template2.querySelector("img").setAttribute("src", el.img);
//   $template2.querySelector("img").setAttribute("alt", el.title);
//   $template2.querySelector("figcaption").textContent = el.title;

//   let $cloning = document.importNode($template2, true);
//   $fragment2.appendChild($cloning);
// });

// $cards2.appendChild($fragment2);

// Modificacion de Elementos (Old Style)
// const $card3 = document.querySelector(".cards"),
//   $randomCard = document.createElement("figure"),
//   $cloneCard = $card3.cloneNode(true);
// $randomCard.innerHTML = `<img src = "https://placeimg.com/200/200/any" alt="Any"> <figcaption>Random Box</figcaption>`;

// $randomCard.classList.add("card");
// // $card3.replaceChild($randomCard, $card3.children[4]);

// $card3.insertBefore($randomCard, $card3.firstElementChild);
// // $card3.insertBefore($randomCard, $card3.lastElementChild);

// // $card3.removeChild($card3.lastElementChild);

// document.body.appendChild($cloneCard);
// $cloneCard.replaceChild($randomCard, $cloneCard.children[3]);

/*
//Flujo de Eventos y Eventos Manejadores / Removedores de Eventos
function holaMundo() {
  alert("Holis");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

const $semEvent = document.getElementById("evento-Semantico"),
  $multiEvent = document.getElementById("eventoMultiple"),
  $removeEvent = document.getElementById("eventoRemover");

$semEvent.onclick = holaMundo;
$semEvent.onclick = function (e) {
  alert("Manera Semantica");
  console.log(e);
  console.log(event);
};

$multiEvent.addEventListener("click", holaMundo);
$multiEvent.addEventListener("click", (e) => {
  alert("Evento Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

$multiEvent.addEventListener("click", () => {
  saludar("Tony");
});

const removeDbClick = (e) => {
  alert(`Removiendo Evento con Manejador Multiple ${e.type}`);
  console.log(e);
  alert("Removido Doble Click");
  $removeEvent.removeEventListener("dblclick", removeDbClick);
  $removeEvent.disabled = true;
};

$removeEvent.addEventListener("dblclick", removeDbClick);
*/

//Flujo de Eventos
// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//   $lkinkEvents = document.querySelector(".eventos-flujo a");

// $divsEventos.forEach((div) => {
//   //fase de burbuja, del interno al mas externo
//   div.addEventListener("click", flujoEventos);
//   // div.addEventListener("click", flujoEventos, false);
//   //fase de captura, del externo al mas interno
//   // div.addEventListener("click", flujoEventos, true);
//   //Tambien se puede pasar un objeto como tercer parametro
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: false, // Comportamiento default (burbuja/bubble)
//   //   once: true, //Solamente se va a ejecutar el evento una vez. Revisar documentacion acerca de eventListeners en MDN Network
//   // });
// });

// $lkinkEvents.addEventListener("click", (e) => {
//   alert("Hola");
//   e.preventDefault(); // Detendra la accion default (En este caso seria la apertura del enlace)
// });

// const powerMetal = document.querySelector()

//Asignacion optima de eventos, crear un addEventlistener Global y condicinarlo con ifs
// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this},el click lo origino ${e.target.className}`
//   );
//   // e.stopPropagation();
// }

// document.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target.matches(".eventos-flujo div")) {
//     flujoEventos(e);
//   }
//   if (e.target.matches(".eventos-flujo a")) {
//     alert("Buenos dias tony");
//     e.preventDefault();
//   }

//   if (e.target.matches("#rhapsody")) {
//     saluditos();
//     alert("Otra vez");
//   }
// });

// function saluditos(e) {
//   alert("Holiviris");
// }

window.addEventListener("resize", (e) => {
  console.log("*******Evento Rezise******");
});

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

<<<<<<< HEAD
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*******Evento Scroll*********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
=======
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const $cards2 = document.querySelector(".cards"),
  $template = template.querySelector("#templateCard").content,
  $fragment2 = document.createDocumentFragment(),
  cardContent = {
    image: image,
  };

const $lk = () => {};
>>>>>>> f4fa9d46d7e7dff72324a9403641ec3b34b1d339

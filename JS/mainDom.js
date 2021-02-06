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

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
//De esta manera JS no detecta los atributos como Nodos ya que solo es texto
$figure2.innerHTML = `<img src = "https://placeimg.com/200/200/tech" alt="People"><figcaption>Tech</figcaption>`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

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

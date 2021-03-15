const d = document,
  $main = d.querySelector("main"),
  $fetchLinks = d.querySelector(".links");

let digiAPI = "https://digimon-api.vercel.app/api/digimon";

async function digimons(url) {
  try {
    $main.innerHTML = `<img class='loader' src="/assets/loader.svg" alt="Loading...">`;
    let res = await fetch(url),
      resJSON = await res.json(),
      $template = "";
    // console.log(resJSON);

    for (let i = 0; i < resJSON.length; i++) {
      //   console.log(resJSON[i]);
      console.log(resJSON[i]);
      $template += `<div><img class= 'digiPICS' src= '${resJSON[i].img}' alt='${resJSON[i].name}'><figcaption>${resJSON[i].name}</figcaption></div> `;
      $main.innerHTML = $template;
    }
  } catch (error) {
    let message =
      error.statusText || "Error 404, No se pudo establecer la conexion";
    $main.innerHTML = `<p>${message} </p>`;
  }
}

d.addEventListener("DOMContentLoaded", (e) => {
  digimons(digiAPI);
});

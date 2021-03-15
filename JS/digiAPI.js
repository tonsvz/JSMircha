const d = document,
  $main = d.querySelector("main"),
  $fetchLinks = d.querySelector(".links");

let digiAPI = "https://digimon-api.vercel.app/api/digimon";

async function digimons(url) {
  try {
    $main.innerHTML = `<img class='loader' src='/assets/loader.svg' alt=....Loading'>`;

    let res = await fetch(url),
      resJSON = await res.json();
    $template = "";

    for (i = 0; i < resJSON.length; i++) {
      console.log(resJSON[i]);

      $template = `<div><img src="${resJSON[i].img}" alt="${resJSON[i].name}" class="digiPICS"><figcaption>${resJSON[i].name}</figcaption></div>`;
      $main.innerHTML += $template;
    }
  } catch (error) {
    alert(`ERROR, SOLO BBC'S PERMITIDOS PAPI`);
    console.error(`ERROR, SOLO BBC'S PERMITIDOS PAPI`);
  }
}

d.addEventListener("DOMContentLoaded", (e) => {
  digimons(digiAPI);
});

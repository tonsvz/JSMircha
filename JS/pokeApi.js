const d = document,
  $main = d.querySelector("main"),
  $link = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

async function loadPokemons(url) {
  try {
    $main.innerHTML = `<img class='loader' src="/assets/loader.svg" alt="Loading...">`;

    let res = await fetch(url),
      json = await res.json(),
      $template = "",
      $prevLink,
      $nextLink;

    console.log(json);

    for (let i = 0; i < json.results.length; i++) {
      // console.log(json.results[i]);
      try {
        let res = await fetch(json.results[i].url),
          pokemon = await res.json();

        // console.log(res, pokemon);

        if (!res.ok)
          throw {
            status: res.status,
            statusText: res.statusText,
          };

        $template += `<figure>
          <img class='gay' src= '${pokemon.sprites.front_default}' alt='${
          pokemon.name
        }'>
          <figcaption class='ptext'>${pokemon.name.toUpperCase()}</figcaption>
          </figure>`;
      } catch (error) {}
    }

    $main.innerHTML = $template;
    $prevLink = json.previous ? `<a href='${json.previous}'>⏮️</a>` : "";
    $nextLink = json.next ? `<a href='${json.next}'>⏭️</a>` : "";
    $link.innerHTML = $prevLink + "" + $nextLink;
  } catch (error) {
    let message = error.statusText || "Ha ocurrido un ERROR";
    $main.innerHTML = `<p>Error ${error.status}: ${message} </p>`;
  }
}

/*Function Event Trigger*/
d.addEventListener("DOMContentLoaded", (e) => {
  loadPokemons(pokeAPI);
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".links a")) {
    e.preventDefault();
    loadPokemons(e.target.getAttribute("href"));
  }
});

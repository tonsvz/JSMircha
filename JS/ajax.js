(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $frag = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Successful Connection");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $frag.appendChild($li);
      });

      $xhr.appendChild($frag);
    } else {
      console.error("Connection Error");
      let message = xhr.statusText || "Ruta no Valida";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
// asdasdasdasd

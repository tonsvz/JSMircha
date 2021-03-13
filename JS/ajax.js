(() => {
  const xhr = new XMLHttpRequest();
  ($xhr = document.getElementById("xhr")),
    ($frag = document.createDocumentFragment());

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Successful Connection");
    } else {
      console.error("Connection Error");
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();

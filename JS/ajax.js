/* XMLHttpRequest */

// (() => {
//   const xhr = new XMLHttpRequest(),
//     $xhr = document.getElementById("xhr"),
//     $frag = document.createDocumentFragment();

//   xhr.addEventListener("readystatechange", (e) => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("Successful Connection");
//       console.log(xhr);
//       // console.log(xhr.responseText);
//       // $xhr.innerHTML = xhr.responseText;
//       let json = JSON.parse(xhr.responseText);
//       console.log(json);

//       json.forEach((element) => {
//         const $li = document.createElement("li");
//         $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
//         $frag.appendChild($li);
//       });

//       $xhr.appendChild($frag);
//     } else {
//       console.error("Connection Error");
//       let message = xhr.statusText || "Ruta no Valida";
//       $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
//     }
//   });

//   // xhr.open("GET", "assets/users.json");
//   xhr.open("GET", "/assets/users.json");

//   xhr.send();
// })();
// asdasdasdasd

/* API Fetch */
// (() => {
//   const $fetch = document.getElementById("fetch"),
//     $fragment = document.createDocumentFragment();
//   fetch("/assets/users.json")
//   // .then((res) => {
//   //   console.log(res);
//     //   return res.ok ? res.json() : Promise.reject(res);
//     // })
//     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//     .then((json) => {
//       console.log(json);
//       json.forEach((element) => {
//           $list.innerHTML = `${element.name} - ${element.email} - ${element.phone}`;
//         const $list = document.createElement("li");
//         $fragment.appendChild($list);
//     });
//       $fetch.appendChild($fragment);
//       //   $fetch.innerHTML = json;
//     })
//     .catch((err) => {
//       console.log("Estamos en el catch", err);
//       let message = err.statusText || "Ocurrio un error";
//       $fetch.innerHTML = `Error ${err.status}: ${message}`;
//     })
//     .finally(() => {
//       console.log(
//         "Esto se Ejecutara Independientemente de el resultado obtenido."
//       );
//     });
// })();

/* Async Await Fetch */

// (() => {
//   const $fetchAsync = document.getElementById("fetch"),
//     $fragment = document.createDocumentFragment();
//   async function getData() {
//     try {
//       let res = await fetch("https://jsonplaceholder.typicode.com/users"),
//         json = await res.json();
//       console.log(res, json);

//       if (res.ok === false)
//         throw {
//           status: res.status,
//         };

//       json.forEach((element) => {
//         const $li = document.createElement("li");
//         $li.innerHTML = `${element.name} -- ${element.phone}`;
//         $fragment.appendChild($li);
//       });
//       $fetchAsync.appendChild($fragment);
//     } catch (error) {
//       console.log(error);
//       let message = error.statusText || "Ocurrio un Error";
//       $fetchAsync.innerHTML = `Error ${error.status} : ${message}`;
//     } finally {
//       console.log("Esto se ejecuta independientemente de la respuesta.");
//     }
//   }

//   getData();
// })();

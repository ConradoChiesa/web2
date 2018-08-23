document.addEventListener('DOMContentLoaded', load());
function load() {
  let btn = document.querySelector("#btnenviar");
  btn.addEventListener('click', procesarTabla);
}

function procesarTabla(evt) {
  evt.preventDefault();
  let ancho = document.querySelector("#input").value;
  let script = 'script/tp1ins09.php?ancho=';
  fetch(script + ancho).then(
    function(response) {
      response.text().then(tabla => {
        document.querySelector('#tabla').innerHTML = tabla;
      })
    }
  )
}

// let numero = 3;
// fetch('miarchivo.php?numero='+ numero).then(.........)

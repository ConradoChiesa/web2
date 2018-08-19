document.addEventListener('DOMContentLoaded', load());
function load() {
  let btn = document.querySelector("#btnenviar");
  btn.addEventListener('click', procesarInputs);
  console.log("Todo listo");
}

function procesarInputs(evt) {
  evt.preventDefault();
  let contenedor = document.querySelector('#contenedor')
  let inputs = document.querySelector("#inputs").value;
  contenedor.innerHTML = '';
    for (let i = 0; i < inputs; i++) {
      crearInput(i);
    }
    function crearInput(i) {
      let input = '<input class="position'+ i +'" type="number" name="valor'+i+'" value="">';
      contenedor.innerHTML += input;

    }
}

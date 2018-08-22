document.addEventListener('DOMContentLoaded', load());
function load() {
  let btn = document.querySelector("#btnenviar");
  btn.addEventListener('click', procesarInputs);
}

function procesarInputs(evt) {
  evt.preventDefault();
  let formulario = document.querySelector('#formulario')
  let inputs = document.querySelector("#inputs").value;
  // let forms = <form>;
  // let forme = </form>;
  contenedor.innerHTML = '';
    // contenedor.innerHTML = forms;
    for (let i = 0; i < inputs; i++) {
      crearInput(i);
    }
    let btn = '<input type="submit">';
    // let sumas = document.querySelector('#sumas')
    // let script = '<?php if(isset($_POST["cantidad"])){$cantinputs = $_POST["cantidad"];} echo $cantinputs; if(isset($_POST["valor"])){$sumar = $_POST["valor"];}echo $sumar;?>';

    formulario.innerHTML += btn;
    // sumas.innerHTML += script;
        // contenedor.innerHTML = forme;
    function crearInput(i) {
      let input = '<input class="position'+ i +'" type="integer" name="valor[]" value="">';
      formulario.innerHTML += input;
    }
}

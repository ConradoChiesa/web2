<?php
$ancho = $_GET['ancho'];
echo "<tr>";
for ($multiplicando=1; $multiplicando <= $ancho; $multiplicando++) {
for ($multiplicador=1; $multiplicador <= $ancho; $multiplicador++) {
    echo "<td >" .$multiplicador * $multiplicando. "</td>";
  }
  echo "</tr>";
}

 ?>

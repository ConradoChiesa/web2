<?php
  if(isset($_POST['valor'])){
    $sumar = $_POST['valor'];
    echo array_sum($sumar);
  }else{
    echo "error 2";
  }
  // echo $sumar;
?>

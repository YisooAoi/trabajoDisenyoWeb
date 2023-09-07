<?php
$conexion = new mysqli('localhost', 'root', '','links');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse con la página";
}
$consulta = "SELECT * FROM tablas;";
$resultado = mysqli_query($conexion, $consulta);


if ($resultado) {
  while ($fila = mysqli_fetch_assoc($resultado)) {
    $tablas[] = array(
      'nombre' => $fila['nombre'],
      'link' => $fila['link'],
      'fechaDeModificacion' => $fila['fechaDeModificacion'],
      'imagen' => $fila['imagen'],
    );
  }
}

?>

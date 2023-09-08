<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    $conexion = new mysqli('localhost', 'root', '','archivo_links');
    if ($conexion->connect_errno) {
      echo "Hubo un error al conectarse con la página";
    }

    $declaracion = $conexion->prepare("INSERT INTO tablas (nombre, link, imagen) VALUES (?, ?, ?);");

    $nombre = $_POST['nombre'];
    $link = $_POST['link'];
    $imagen = $_POST['imagen'];

    $declaracion->bind_param("sss", $nombre, $link, $imagen);
    $declaracion->execute();
    ?>
    <script type="text/javascript">
      window.onload = window.location.href = "../../index.html";
    </script>
  </body>
</html>

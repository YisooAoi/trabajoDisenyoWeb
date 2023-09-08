const solicitudXmlHttp = new XMLHttpRequest();
var mostradorTablas = document.getElementById("mostradorTablas");
solicitudXmlHttp.open(
  'GET',
  'comunicacionBaseDeDatos/php/listaLinks.php'
);
solicitudXmlHttp.send();
solicitudXmlHttp.onload = function () {
  let respuesta = this.responseText;
  let tablaLinks = JSON.parse(respuesta);
  codigoHTML = '';
  tablaLinks.forEach((fila) => {
    codigoHTML += `
    <tr>
    <td class="itemLista"> ${fila.nombre} </td>
    <td class="itemLista"> ${fila.link} </td>
    <td class="itemLista"> ${fila.fechaDeModificacion} </td>
    <td class="itemLista"> ${fila.imagen} </td>
    <td class="itemLista botones">
      <div class="botonTabla" id="mostrar" onclick='window.location.href = "${fila.link}";'> <img class="botonSVG" src="gráficos/mostrarLink.svg" alt="Mostar Link"> </div>
      <div class="botonTabla" id="editar" onclick='window.location.href="editor.html?editar=true";'> <img class="botonSVG" src="gráficos/pincelEditar.svg" alt="Editar"> </div>
      <div class="botonTabla" id="eliminar" onclick="eliminarLink()"> <img class="botonSVG" src="gráficos/basuraCerrada.svg" alt="Eliminar"> <!--<img class="botonSVG" src="gráficos/basuraAbierta.svg" alt="Eliminar">--> </div>
    </td>
    </tr>`
  });
  mostradorTablas.innerHTML = codigoHTML;
}

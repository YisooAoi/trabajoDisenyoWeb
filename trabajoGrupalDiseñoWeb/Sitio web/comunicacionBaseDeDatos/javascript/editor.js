const parametros = new URLSearchParams(document.location.search);
const editar = parametros.get("editar");
const identificador = parametros.get("id");
console.info(identificador);

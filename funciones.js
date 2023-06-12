
function mostrarCategorias() {
    var categorias = [
      "Electrónica",
      "Ropa",
      "Muebles",
      "Deportes",
      "Libros",
      "Juguetes",
      "Hogar",
      "Tecnología",
      "Alimentación",
      "Belleza",
      "Automóviles",
      "Viajes",
      "Mascotas",
      "Instrumentos musicales",
      "Arte y manualidades",
      "Salud y bienestar",
      "Joyas y relojes",
      "Herramientas",
      "Cine y música",
      "Otros"
    ];

    categorias.sort(); // Ordenar categorías alfabéticamente

    var searchInput = document.getElementById("searchInput");
    var dataList = document.createElement("datalist");
    dataList.id = "categoriasList";

    for (var i = 0; i < categorias.length; i++) {
      var option = document.createElement("option");
      option.value = categorias[i];
      dataList.appendChild(option);
    }

    searchInput.setAttribute("list", "categoriasList");
    document.body.appendChild(dataList);
  }


function mostrarComunas() {
  var comunas = [
    "Cerrillos",
    "Cerro Navia",
    "Conchalí",
    "El Bosque",
    "Estación Central",
    "Huechuraba",
    "Independencia",
    "La Cisterna",
    "La Florida",
    "La Granja",
    "La Pintana",
    "La Reina",
    "Las Condes",
    "Lo Barnechea",
    "Lo Espejo",
    "Lo Prado",
    "Macul",
    "Maipú",
    "Ñuñoa",
    "Pedro Aguirre Cerda",
    "Peñalolén",
    "Providencia",
    "Pudahuel",
    "Quilicura",
    "Quinta Normal",
    "Recoleta",
    "Renca",
    "San Bernardo",
    "San Joaquín",
    "San Miguel",
    "San Ramón",
    "Santiago",
    "Vitacura"
  ];

  comunas.sort(); // Ordenar comunas alfabéticamente

  var comunaInput = document.getElementById("comunaInput");
  var dataList = document.createElement("datalist");
  dataList.id = "comunasList";

  for (var i = 0; i < comunas.length; i++) {
    var option = document.createElement("option");
    option.value = comunas[i];
    dataList.appendChild(option);
  }

  comunaInput.setAttribute("list", "comunasList");
  document.body.appendChild(dataList);
}
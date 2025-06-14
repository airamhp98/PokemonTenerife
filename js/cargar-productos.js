function cargarProductos(jsonUrl, contenedorId, callback = null) {
  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById(contenedorId);
      data.forEach(producto => {
        const item = document.createElement("div");
        item.className = "item";

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const texto = document.createElement("p");
        texto.textContent = `${producto.nombre} - ${producto.precio}`;

        item.appendChild(img);
        item.appendChild(texto);
        contenedor.appendChild(item);
      });

      if (callback) callback(data);
    });
}

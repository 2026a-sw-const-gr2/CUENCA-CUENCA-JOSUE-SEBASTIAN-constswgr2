const form = document.getElementById("productForm");
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

let products = [];
let editingProductId = null;

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const stock = parseInt(document.getElementById("stock").value);

    if(nombre.trim() === ""){

        alert("El nombre es obligatorio");
        return;
    }

    if(categoria.trim() === ""){
        
        alert("La categoría es obligatoria");
        return;
    }

    if(isNaN(precio) || precio <= 0){

        alert("El precio debe ser mayor a 0");
        return;
    }

    if(isNaN(stock) || stock < 0){

        alert("El stock no puede ser negativo");
        return;
    }

    const safeNombre = nombre
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const safeCategoria = categoria
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const product = {
        id: editingProductId ?? Date.now(),
        nombre: safeNombre,
        categoria: safeCategoria,
        precio,
        stock
    };

    if (editingProductId) {
        products = products.map(p =>
            p.id === editingProductId ? product : p
    );

        await sendEvent("update", product);
        editingProductId = null;
        form.querySelector("button").textContent = "Guardar Producto";
    } else {
        products.push(product);
        await sendEvent("create", product);
    }

    renderProducts();
    form.reset();
});

function renderProducts(){

    productList.innerHTML = "";

    const filteredProducts = products.filter(product =>
        product.nombre.toLowerCase().includes(
            searchInput.value.toLowerCase()
        )
    );

    filteredProducts.forEach(product => {

        productList.innerHTML += `
        
        <div class="product">

            <h3>${product.nombre}</h3>

            <p>Categoría: ${product.categoria}</p>

            <p>Precio: $${product.precio}</p>

            <p>Stock: ${product.stock}</p>

            <button onclick="editProduct(${product.id})">
                Editar
            </button>

            <button onclick="deleteProduct(${product.id})">
                Eliminar
            </button>

        </div>

        `;
    });

}

async function editProduct(id) {
    const product = products.find(p => p.id === id);

    if (!product) {
        alert("Producto no encontrado");
        return;
    }

    document.getElementById("nombre").value = product.nombre;
    document.getElementById("categoria").value = product.categoria;
    document.getElementById("precio").value = product.precio;
    document.getElementById("stock").value = product.stock;

    editingProductId = id;
    form.querySelector("button").textContent = "Actualizar Producto";
}

async function deleteProduct(id){

    const confirmDelete = confirm("¿Seguro que deseas eliminar este producto?");

    if (!confirmDelete) {
        return;
    }

    products = products.filter(product => product.id !== id);

    renderProducts();

    await sendEvent("delete", { id });
}

async function sendEvent(type, data){

    try{

        await fetch("http://localhost:3000/events", {

            method: "POST",

            headers: {
               "Content-Type": "application/json",
               "x-epn-key": "FIS-EPN-2026"
            },
            
            body: JSON.stringify({
                source: "cafeteria-crud",
                entity: "producto",
                action: type.toUpperCase(),
                title: "Evento de cafetería",
                description: `Acción ${type} realizada en el sistema de cafetería`,
                payload: data
            })

        });

        console.log(`[LOG INFO] Evento ${type.toUpperCase()} enviado correctamente`);

    }catch(error){

        console.log(error);
        
        console.error(`[LOG ERROR] Falló el envío del evento ${type.toUpperCase()}`);

    }

}

searchInput.addEventListener("input", async () => {
  const searchTerm = searchInput.value.trim();

  renderProducts();

  if (searchTerm !== "") {
    await sendEvent("query", {
      searchTerm: searchTerm,
      results: products.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      ).length
    });
  }
});
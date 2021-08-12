const listaParaAsado = [{ id: 1, producto: "Costilla", precio: 850 },
{ id: 2, producto: "Vacio", precio: 870 },
{ id: 3, producto: "Pan", precio: 120 },
{ id: 4, producto: "Ensalada", precio: 300 },
{ id: 5, producto: "Chorizo", precio: 300 },
{ id: 6, producto: "Morcillas", precio: 200 },
{ id: 7, producto: "Chinchulines", precio: 900 },
{ id: 8, producto: "Molleja", precio: 500 }];

const buscar = listaParaAsado.find(producto => producto.id === 2);
console.log(buscar);
const encontrar = parseInt(prompt('Cuanto desea gastar?'));
if (encontrar != "") {
  const barato = listaParaAsado.filter(id => id.precio <= encontrar);
  console.log(barato.length);
  if (barato.length >= 1) {
    barato.sort(function (a, b) {
      if (a.precio < b.precio) {
        return 1;
      }
      if (a.precio > b.precio) {
        return -1;
      }
      return 0;
    });
    alert(`Te alcanza para ${barato[0].producto}; Mejor decile a Nico que te preste unos mangos`);
  } else {
    alert('lo siento hermano, no te alcanza para el asado')
  };

  let titulo = document.createElement("p");
  titulo.innerHTML = "<p>Bienvenido al AutoDiagnostico CAM</p>";
  document.body.appendChild(titulo);


/*  //-------------------------------------desafio DOM-------------------------
   for (titulo of listaParaAsado) {
     let lista = document.createElement("");
     lista.innerHTML = "<h2>LISTA DE COMPRAS</h2>";
     document.body.appendChild(lista);
   }  */


    // Crear nodo de tipo Elemento, etiqueta p
    // Insertar HTML interno
    // Añadir el nodo Element como hijo de body

/*
-----Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
-----Modificar etiquetas existentes en función del resultado de operaciones.

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);
*/

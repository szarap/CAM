//----------------------------------MI CODIGO------------


var directivos= [];
/* fetch("./db/card.json").then((respuesta)=>{     
     return respuesta.json(); 
   }).then((json) => {    
     directivos = json;
     cargaProductos() 
   }); */
   $.getJSON("./db/card.JSON", function (datos) {
	directivos = datos;
	cargaProductos()
 })
    

const registrar = () =>{ 

let empresa = document.getElementById("empresa").value;
let titular = document.getElementById("titular").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let mensajeValidacion = document.querySelector('#mensaje-validacion');



if (empresa !== "" && titular !== "" && email !== "" && telefono !== "") {

	mensajeValidacion.className = "text-success";
	mensajeValidacion.innerHTML = `Bienvenido ${empresa}`;
	localStorage.setItem('empresa', JSON.stringify(empresa));
	localStorage.setItem('titular', JSON.stringify(titular));
	localStorage.setItem('email', JSON.stringify(email));
	localStorage.setItem('telefono', JSON.stringify(telefono));

	mensajeValidacion.style.display = '';

	setTimeout(() => {
		window.location = './index.html';
	}, 1200);

} else {
	mensajeValidacion.className = "text-danger";
	mensajeValidacion.innerHTML = "Usuario o contraseña incorrecta";
}
}

//------------------------------------------jQuery-----------------------
$(".autodiagnostico__titulo").hide().fadeIn(function(){
	$(this).animate({
	opacity: 1},1500)
});
$('#resultado').addClass("contenedor__preguntas");
$('h3').addClass("pregunta");

//------------------------------------------FUNCIONES---------------------
function mostrarContinuar(){
	document.getElementById('resultado').style.display = 'block';	
};

function verificarRespuestas(){
	var total = 10;
	var puntos = 0;

	var miFormnulario = document.forms['formulario__preguntas'];
	var respuestas = ['pts__1','pts__3','pts__5','pts__1','pts__3','pts__5','pts__1','pts__3','pts__5','pts__1'];

	for (var i = 1; i <= total; i++){
		if (miFormnulario["p" + i].value === null || miFormnulario["p" + i].value === ""){
			alert("respuesta invalida" + i);
			return false;
		}else {
			if (miFormnulario["p" + i].value === respuestas[i - 1]){
				puntos++;
			}

			var resultado = document.getElementById("resultado");
			resultado.innerHTML = '<h4>Obtuvistes <span>' + puntos + '</span> de <span>' + total +' puntos</span> </h4>'
		}
	}

	return false;
}

//------------------------AJAX----------------------
/* var directivos = [];
$.get("./db/card.json", function(datos){
	console.log("datos:", datos);
	
}) */
const cargaProductos = ()=>{
    
	let institucional= "";
  
	directivos.forEach(
	    (p) => 
		  (institucional +=`
  <div class="card d-inline-flex p-2 col-2 m-2" style="width: 13rem">
	<img src="${p.imagen}" style="height: 9rem" class="card-img-top" alt="${p.cardTitle}">
	<div class="card-body">
	    <h5 class="card-title">${p.cardTitle}</h5>
	    <h5 class="text-primary">Precio: <span>${p.objetivo}</span></h5>
	    <div class="d-grid gap-2">
		  <button class="btn btn-primary button" id="btnComida">Añadir a pedido</button>
	    </div>
	</div>
  </div>`)
  );
  $("#tarjeta__intitucional").html(institucional);
  };
  //--------------------------

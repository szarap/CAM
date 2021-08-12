
//---------------tercera opcion-----V1-------------
/* const empresas= [];
class Empresa{
    constructor(pNombre, pEmail,pTelefono){
        this.nombre= pNombre;
        this.email= pEmail;
        this.telefono= pTelefono;}    
};
do {
    const pNombre= prompt ("Ingresa tu Nombre de tu Empresa");
    const pEmail= prompt ("Ingresa un Email de Contacto");
    const pTelefono= parseInt(prompt ("Ingresa un telefono de Contacto"));
    const nuevaEmpresa = new Empresa (pNombre, pEmail, pTelefono);
    //aca me esta faltando el push a empresas no??
    // -----push----
    empresas.push(new Empresa/* .toUpperCase ()); //me toma error el .toUpperCase y no entiendo pq si lo aplique igual qeu antes
    function respuestaCam (){
        alert(`Gracias por ingresar a CAM ${pNombre}`);
    } //----------------- no estoy entendiendo bien como hacer la funcion para validar la nuevaEmpresa,
      // enntiendo que para escribir una function debo usar el formato function xxx(){}; 
      //pero no deberia poner algo como; 

    /* function respuestaCam (){
        alert(`Gracias por ingresar a CAM,  (ESTO)  ${Empresa.pNombre}`); 
    } 
    
    y luego llamarla respuestaCam();

    // siento que la funcion para validar la nueva empresa la estoy aplicando en el luegar incorrecto!
    */


/*    let inicioAutoDiagnostico = prompt (`Te invitamos a realizar una AutoEvalucion Diagnostica para que podamos seguir brindandote lo que tu Empresa Necesita/nS/N`);
    //aca a esta variable let-- deberia de alguna manera hacer que este dentro de una function 
    //para que sea mas facil usarla luego en otra parte del codigo no? 
    
    if (nuevaEmpresa != ""){
            //console.log (inicioAutoDiagnostico); // PQ TENIA ESTE CONSOLE.LOG ACA?? NO RECUERDO QUE FUNCION CUMPLE, 
                                                //JAJA ESTUVE TOQUETEANDO Y POR AHI LO AGREGUE Y NO RECUERDO, OMG!
        switch (inicioAutoDiagnostico){           
                case "S":
                    inicioAutoDiagnostico = "s";                        
                    alert ("Bienvenido al Autodiagnostico de CAM");
                    alert ("Nuestro formulario consta de 54 preguntas y te propondremos 3 posibles respuestas. /n Recuerda que debes elegir solo una opcion en cada pregunta.");
                    prompt ("pregunta numero 1");
                    break;
                case "N":
                    inicioAutoDiagnostico = "n";                        
                    alert("CAM es....");
                    alert ("Bienvenido a la AutoEvaluacion CAM ");
                    prompt ("pregunta numero 1");
                    break;
                default:
                    inicioAutoDiagnostico = ""
                    alert ("debes elegir una opcion correcta");
                    break;
                }
        }
    else if (nuevaEmpresa == "")    
    alert ("Debes ingresar los datos correctos para continuar")
}
while
    (new Empresa != ""){
} */

//--------------------------3era opcion---V2----------------------------------------------
/* const empresas = [];
class Empresa {
    constructor(pNombre, pEmail, pTelefono) {
        this.nombre = pNombre;
        this.email = pEmail;
        this.telefono = pTelefono;
    }
};
function crearEmpresa() {
    const pNombre = prompt("Ingresa tu Nombre de tu Empresa");
    const pEmail = prompt("Ingresa un Email de Contacto");
    const pTelefono = parseInt(prompt("Ingresa un telefono de Contacto"));
    const nuevaEmpresa = new Empresa(pNombre, pEmail, pTelefono);
    return nuevaEmpresa
};    // -----push----
empresas.push(new Empresa()); //me toma error el .toUpperCase y no entiendo pq si lo aplique igual qeu antes
function respuestaCam() {
    alert(`Gracias por ingresar a CAM ${pNombre}`);
}
crearEmpresa();
let inicioAutoDiagnostico = prompt(`Te invitamos a realizar una AutoEvalucion Diagnostica para que podamos seguir brindandote lo que tu Empresa Necesita/nS/N`);
if (crearEmpresa != "") {
    switch (inicioAutoDiagnostico) {
        case "S":
            inicioAutoDiagnostico = "s";
            alert("Bienvenido al Autodiagnostico de CAM");
            alert("Nuestro formulario consta de 54 preguntas y te propondremos 3 posibles respuestas. \n Recuerda que debes elegir solo una opcion en cada pregunta.");
            prompt("pregunta numero 1");
            break;
        case "N":
            inicioAutoDiagnostico = "n";
            alert("CAM es....");
            alert("Bienvenido a la AutoEvaluacion CAM ");
            prompt("pregunta numero 1");
            break;
        default:
            inicioAutoDiagnostico = ""
            alert("debes elegir una opcion correcta");
            break;
    }
}
else if (crearEmpresa == "")
    alert("Debes ingresar los datos correctos para continuar");
//----------------------Desafio Interactuar con HTML ----------------------------------------------
let titulo = document.createElement("p");
titulo.innerHTML = "<p>Bienvenido al AutoDiagnostico CAM</p>";
document.body.appendChild(titulo);

let formulario = document.getElementsByTagName("div");
console.log(formulario.innerHTML);
//----------------------Desafio Eventos--------------------------------------------------
function btnIniAd() {
    document.getElementById("iniAd").innerHTML = "El Autodiagnostico CAM consta de 54 preguntas";
} */ 

//-------------------------------

/*  const ingresar= ()=>{
    let cliente = document.getElementById("nombre").value;
    let mesa = parseInt(document.getElementById("numeroMesa").value);
    let mensajeValidacion = document.querySelector('#mensaje-validacion');
if(cliente!== "" && mesa <25){
    mensajeValidacion.className="text-success";
    mensajeValidacion.innerHTML=`Bienvenido ${cliente}`;
    localStorage.setItem("usuario", JSON.stringify(cliente));
   setTimeout(()=>{
        window.location='./index.html';
    }, 3000);
 }else{
    mensajeValidacion.className="text-danger";
    mensajeValidacion.innerHTML="Usuario o numero de mesa incorrecta";
    }
} */ 
/*const empresas = [];
class Empresa {
    constructor(pNombre, pEmail, pTelefono) {
        this.nombre = pNombre;
        this.email = pEmail;
        this.telefono = pTelefono;
    }
};
function crearEmpresa() {
    const pNombre = prompt("Ingresa tu Nombre de tu Empresa");
    const pEmail = prompt("Ingresa un Email de Contacto");
    const pTelefono = parseInt(prompt("Ingresa un telefono de Contacto"));
    const nuevaEmpresa = new Empresa(pNombre, pEmail, pTelefono);
    return nuevaEmpresa
};    // -----push----
empresas.push(new Empresa()); //me toma error el .toUpperCase y no entiendo pq si lo aplique igual qeu antes
function respuestaCam() {
    alert(`Gracias por ingresar a CAM ${pNombre}`);
}
crearEmpresa();
let inicioAutoDiagnostico = prompt(`Te invitamos a realizar una AutoEvalucion Diagnostica para que podamos seguir brindandote lo que tu Empresa Necesita/nS/N`);
if (crearEmpresa != "") {
    switch (inicioAutoDiagnostico) {
        case "S":
            inicioAutoDiagnostico = "s";
            alert("Bienvenido al Autodiagnostico de CAM");
            alert("Nuestro formulario consta de 54 preguntas y te propondremos 3 posibles respuestas. \n Recuerda que debes elegir solo una opcion en cada pregunta.");
            prompt("pregunta numero 1");
            break;
        case "N":
            inicioAutoDiagnostico = "n";
            alert("CAM es....");
            alert("Bienvenido a la AutoEvaluacion CAM ");
            prompt("pregunta numero 1");
            break;
        default:
            inicioAutoDiagnostico = ""
            alert("debes elegir una opcion correcta");
            break;
    }
}
else if (crearEmpresa == "")
    alert("Debes ingresar los datos correctos para continuar");*/
//----------------------Desafio Interactuar con HTML ----------------------------------------------
let formulario = document.getElementById("divAd");
//console.log(formulario.innerHTML);
let titulo = document.createElement("form")
titulo.innerHTML = "<p>Este parrafo donde esta?</p>";
formulario.appendChild(titulo);


//----------------------Desafio Eventos--------------------------------------------------
/* function btnIniAd() {
    document.getElementById("iniAd").innerHTML = "El Autodiagnostico CAM consta de 54 preguntas";
}

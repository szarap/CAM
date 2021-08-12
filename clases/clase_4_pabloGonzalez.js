//---------------------------Entrega: Funciones relacionadas-------------------------------

var preguntaInicial = prompt ("Sabes lo que es CAM? \n-si \n-no").toLocaleLowerCase();
var precioAn=0;
var precioSem= 0;
var precioTrime= 0;
var cuotas = 0;
const intTres =(a,b,f)=>(a*b)+f;
const intSeis =(a,c,g)=>(a*c)+g;
const intDoce =(a,d,h)=>(a*d)+h;

function eligePlan (respuestaUsuario){
    respuestaUsuario = respuestaUsuario.toLowerCase();
    switch (respuestaUsuario) {           
        case "anual":
            cuotas = 12;
            precioAn=7000;
            let presupuestoAn =intDoce(cuotas,0.35,precioAn);                     
            alert ("El costo del servicio seleccionado es" + presupuestoAn);        
            break;
        case "semestral":
            cuotas = 6;
            precioSem=4500;
            let presupuestoSem = intSeis(cuotas,0.35,precioSem);          
            alert ("El costo del servicio seleccionado es" + presupuestoSem);            
            break;
        case "trimestral":
            cuotas = 3;
            precioTrime=3500;
            let presupuestoTrime = intSeis(cuotas,0.25,precioTrime);            
            alert ("El costo del servicio seleccionado es" + presupuestoTrime);
            break;
        default:
            precio = 0;
            alert ("debes elegir una opcion correcta");
            break;
        }
};

if (preguntaInicial == "si") {
    let respuesta = prompt ("Sabias que tenemos un plan: \n-Anual \n-Semestral \n-Trimestral").toLowerCase();
    eligePlan (respuesta);
    
}
else if (preguntaInicial == "no"){
    alert ("Cam es............xxxx")    
} 






 
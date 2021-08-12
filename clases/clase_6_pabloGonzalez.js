// -------------------------Desafio Arrays----------------------

const listaParaAsado= [];
let   cantidad = 10;
do{
   let entrada = prompt("Que hay que comprar?");
   listaParaAsado.push(entrada.toUpperCase());
   console.log(listaParaAsado.length);
}while(listaParaAsado.length != cantidad)
const noTeOlvides = listaParaAsado.concat(["Molleja","Chimichurri"]);
alert(noTeOlvides.join("\n"));


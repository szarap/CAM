let carnes= prompt ("Que tipo de carne consumis? \n 1) roja \n 2) blanca \n 3) pescado");
carnes = carnes.toLowerCase();
while (carnes != "ESC"){
    switch (carnes){
        case "roja":
            alert("si tuvieras que elegir el corte mas facil de cocinar cual sería? \n 1- Vacio \n 2- Tapa de Asado \n 3- Costilla \n 4- Colita de Cuadril ");
            break;
        case "blanca":
            alert("A que punto lo cocinas? \n 1) poco cocinado \n 2) punto medio \n 3) muy cocinado");
            break;
        case "pescado":
            alert ("A que punto lo cocinas? \n 1) poco cocinado \n 2) punto medio \n 3) muy cocinado");
        default:
            alert("Debes ingresar una opcion valida");
            break;
    } 
    carnes = prompt ("Que tipo de carne consumis?")
}

// ---------------------COMO HAGO PARA AHORA HACER UN IF / ELSE JF EN CADA OPCION DE CARNE?--------------------







/* (carnes == "roja" || carnes == 1){   

    let tipoCorte = parseInt (prompt ("si tuvieras que elegir el corte mas facil de cocinar cual sería? \n 1- Vacio \n 2- Tapa de Asado \n 3- Costilla \n 4- Colita de Cuadril ");
    
    if (tipoCorte == 1 || "Vacio") {
        alert ( "Excelente eleccion ")
        break;
    } 
    else if ( tipoCorte == 2|| "Tapa de Asado"){
        alert ("Este es la opcion mas elegida")
        break;
    } 
    else if (tipoCorte == 3 || "Costilla"){
        alert ( "siempre hace falta una costillita a la parrilla")
        break;
    }    
    else if (tipoCorte == 4 || "Colita de Cuadril"){
        alert ("el que sabe, sabe")
        break;
    }
    else {
        alert("tenes que elegir una opcion")
    }
} */


/* while (carnes == "blanca" || carnes == 2){
    let puntoCarne = parseInt(prompt ("A que punto la cocinas? \n 1) poco cocinado \n 2) punto medio \n 3) muy cocinado"));
    
    if ( puntoCarne == 1 || "poco cocinado"){
        alert ( "No es la opcion segura")
        break;
    } 
    else if ( puntoCarne == 2 || "punto medio"){
        alert ("No te recomendamos esta opcion")
        break;
    } 
    else if (puntoCarne == 3 || "muy cocinado"){
        alert ( "Excelente eleccion")
        break;
    }    
    else{
        alert ("debes elegir una opcion valida")
        break;
    }
}

while (carnes == "pescado" || carnes == 3){
     let puntoCarne = parseInt(prompt ("A que punto la cocinas? \n 1) poco cocinado \n 2) punto medio \n 3) muy cocinado"));
    
    if ( puntoCarne == 1 || "poco cocinado"){
        alert ( "No es la opcion segura")
        break;
    } 
    else if ( puntoCarne == 2 || "punto medio"){
        alert ("No te recomendamos esta opcion")
        break;
    } 
    else if ( puntoCarne == 3 || "muy cocinado"){
        alert ("Excelente eleccion")
        break;
    }
    else{
        alert ("debes elegir una opcion valida")
        break;
    }
} */
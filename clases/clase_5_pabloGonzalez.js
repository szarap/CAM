//-------------Desafio Objetos-------  

class carnes {
    constructor(tipos, coccion, metodo) {
        this.tipos = tipos.toUpperCase();
        this.coccion = coccion.toUpperCase();
        this.metodo = metodo.toUpperCase();
    }
    asado() {
        console.log("El asado es" + this.tipos + this.coccion + this.metodo);
    }
};
const juntadaConLosPibe = new carnes(" Carne Roja", " Medium rare", " a la parrilla");
juntadaConLosPibe.asado();
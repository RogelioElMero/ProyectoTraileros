class Cliente extends Persona{
    #Referencia;
    Ruta=[];
    /**
     * 
     * @param {String} name 
     * @param {String} lastname 
     * @param {String} Referen 
     */
    constructor(name,lastname,referencia){
        super(name,lastname);
        this.#Referencia=referencia;


    }
    
    

    /**
     * 
     * @param {Ruta} Ruta 
     */
    setRuta = function(Ruta){
        let ruta=this.Ruta;
        ruta.push(Ruta);
    }

    /**
     * 
     * @param {String} referencia 
     */
    updateReferencia = function(referencia){
        this.Referencia=referencia;
    }

}
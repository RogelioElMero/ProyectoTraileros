class Cliente extends Persona{
    #Referencia;
    /**
     * 
     * @param {String} name 
     * @param {String} lastname 
     * @param {String} Referen 
     */
    constructor(name,lastname,referen){
        super(name,lastname);
        this.#Referencia=referen;


    }
    
    /**
     * 
     * @param {String} Referen 
     */
    setReferencias=function(Referen){
        this.Referencia=Referen;
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
class Cliente extends Persona{
    #Referencia;
    constructor(name,lastname,Referen){
        super(name,lastname);
        this.#Referencia=Referen;


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

}
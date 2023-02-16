class Cliente extends Persona{
    Referencia;
    #Ruta=[];
    /**
     * t
     * @param {String} name 
     * @param {String} lastname 
     * @param {String} Referen 
     */
    constructor(name,lastname,referencia){
        super(name,lastname);
        this.Referencia=referencia;


    }
    
    

    /**
     * 
     * @param {Ruta} Ruta 
     */
    setRuta =function(Ruta){
        let ruta=this.#Ruta;
        ruta.push(Ruta);
    }

   /**
    * 
    * @returns String
    */
    readCliente=function(){
        return `${this.ID}-${this.Nombre}-${this.Apellido}-${this.Referencia}`    
    }
}
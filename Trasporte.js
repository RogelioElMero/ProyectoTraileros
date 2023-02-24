class Trasporte {
    ID;
    Modelo;
    Suspension;
    CapacidadCarga;
    Placa;
    NumeroSerie;
    TipoTracto;
    #Ruta=[];

    /**
     * 
     * @param {String} model 
     * @param {String} suspension 
     * @param {Float} capacidad 
     * @param {String} placa 
     * @param {Int} numeroSerie 
     * @param {String} tipotracto 
     */
    constructor(model,suspension,capacidad,placa,numeroSerie,tipotracto){
        this.Modelo=model;
        this.Suspension=suspension;
        this.CapacidadCarga=capacidad;
        this.Placa=placa;
        this.NumeroSerie=numeroSerie;
        this.TipoTracto=tipotracto;

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
    readTrasporte =function(){
        
        return  `${this.ID}-${this.Modelo}-${this.Suspension}-${this.CapacidadCarga}-${this.Placa}-${this.NumeroSerie}-${this.TipoTracto}`;
    }

   	/**
	 * 
	 * @returns Int
	 */
	createId=function(){
        return Math.floor(Math.random() * 10000);
	}


}
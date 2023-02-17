class Trasporte {
    Modelo;
    Suspencion;
    CapacidadCarga;
    Placa;
    NumeroSerie;
    TipoTracto;
    #Ruta=[];

    /**
     * 
     * @param {String} model 
     * @param {String} suspencion 
     * @param {Float} capacidad 
     * @param {String} placa 
     * @param {Int} numeroSerie 
     * @param {String} tipotracto 
     */
    constructor(model,suspencion,capacidad,placa,numeroSerie,tipotracto){
        this.Modelo=model;
        this.Suspencion=suspencion;
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
        return `${this.Modelo}-${this.Suspencion}-${this.CapacidadCarga}-${this.Placa}-${this.NumeroSerie}-${this.TipoTracto}`;
    }
}
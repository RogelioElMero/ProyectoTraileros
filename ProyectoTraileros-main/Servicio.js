class Servicio {
    TipoMaterial;
    CantidadMaterial;
    Costo;
    #Ruta=[];


    /**
     * 
     * @param {String} TipoMaterial 
     * @param {Float} CantidadDeMaterial 
     * @param {Float} Costo 
     */
    constructor(tipoMaterial,cantidadDeMaterial,costo){
        this.TipoMaterial=tipoMaterial;
        this.CantidadDeMaterial=cantidadDeMaterial;
        this.Costo=costo;
    }

    /**
     * 
     * @param {Ruta} Ruta 
     */
    setRuta = function(Ruta){
        let ruta=this.#Ruta;
        ruta.push(Ruta);
    }
    /**
     * 
     * @returns String
     */
    readServicio = function(){
        return `${this.TipoMaterial}-${this.CantidadMaterial}-${this.Costo}`;
    }
    



    
}
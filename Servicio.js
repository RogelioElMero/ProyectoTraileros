class Servicio {
    TipoMaterial;
    #CantidadDeMaterial;
    #Costo;
    Ruta=[];


    /**
     * 
     * @param {String} TipoMaterial 
     * @param {Float} CantidadDeMaterial 
     * @param {Float} Costo 
     */
    constructor(tipoMaterial,cantidadDeMaterial,costo){
        this.TipoMaterial=tipoMaterial;
        this.#CantidadDeMaterial=cantidadDeMaterial;
        this.#Costo=costo;
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
     * @param {Float} cantidadDeMaterial 
     */
    updateCatindadDeMaterial=function(cantidadDeMaterial){
        this.#CantidadDeMaterial=cantidadDeMaterial;
    }
    
    /**
     * 
     * @param {Float} costo 
     */
    updateCosto=function(costo){
        this.#Costo=costo;
    }



    
}
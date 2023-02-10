class Servicio {
    #TipoMaterial;
    #CantidadDeMaterial;
    #Costo;
    Ruta=[];

    constructor(TipoMaterial,CantidadDeMaterial,Costo){
        this.#TipoMaterial=TipoMaterial;
        this.#CantidadDeMaterial=CantidadDeMaterial;
        this.#Costo=Costo;
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
     * @param {String} tipoMaterial 
     */
    updateTipoMaterial=function(tipoMaterial){
        this.#TipoMaterial=tipoMaterial;

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
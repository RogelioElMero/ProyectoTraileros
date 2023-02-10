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

    


    
}
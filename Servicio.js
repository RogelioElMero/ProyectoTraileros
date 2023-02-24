class Servicio {
    ID;
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
        this.CantidadMaterial=cantidadDeMaterial;
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
        return `${this.ID}-${this.TipoMaterial}-${this.CantidadMaterial}-${this.Costo}`;
    }
    
    /**
	 * 
	 * @returns Int
	 */
	createId=function(){
        return Math.floor(Math.random() * 10000);
	}

    



    
}
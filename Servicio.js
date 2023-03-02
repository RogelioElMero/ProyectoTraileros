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
     * @param {Int} Index 
     */
    deleteRuta=function(Index){
        this.#Ruta.splice(Index,1);
    }

    /**
     * 
     * @returns Ruta[]
     */
    arrayRuta=function(){
        let ruta=this.#Ruta;
        return ruta;
    
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
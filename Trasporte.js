class Trasporte {
    Modelo;
    Suspencion;
    #CapacidadCarga;
    #Placa;
    #NumeroSerie;
    #TipoTracto;
    Ruta=[];

    /**
     * 
     * @param {String} model 
     * @param {String} suspencion 
     * @param {Float} capacidad 
     * @param {String} placa 
     * @param {Int} numeroSerie 
     * @param {String} tipotracto 
     */
    Costructor(model,suspencion,capacidad,placa,numeroSerie,tipotracto){
        this.Modelo=model;
        this.Suspencion=Suspencion;
        this.#CapacidadCarga=capacidad;
        this.#placa=placa;
        this.#NumeroSerie=numeroSerie;
        this.#TipoTracto=tipotracto;

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
     * @param {Float} capacidadCarga 
     */
    updateCapacidadCarga=function(capacidadCarga){
        this.#CapacidadCarga=capacidadCarga;
    }
    /**
     * 
     * @param {String} placa 
     */
    updatePlaca = function(placa){
        this.#Placa=placa;
    }

    /**
     * 
     * @param {Int} numeroSerie 
     */
    updateNumeroSerie= function(numeroSerie){
        this.#NumeroSerie=numeroSerie;
    }

    /**
     * 
     * @param {String} tipoTracto 
     */
    updateTipoTracto=function(tipoTracto){
        this.#TipoTracto=tipoTracto;
    }
}
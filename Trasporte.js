class Trasporte {
    Modelo;
    Suspencion;
    #CapacidadCarga;
    #Placa;
    #NumeroSerie;
    #TipoTracto;
    Ruta=[];

    Costructor(Model,Suspencion){
        this.Modelo=Model;
        this.Suspencion=Suspencion;

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
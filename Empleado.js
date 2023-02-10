class Empleado extends Persona{
    Ocupacion;
    #Horario;
    #Curp;
    #Ine;
    Ruta=[];
    constructor(name,lastname,Ocupacion,Horario,Curp,Ine){
        super();
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
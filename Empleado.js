class Empleado extends Persona{
    Ocupacion;
    #Horario;
    #Curp;
    #Ine;
    Ruta=[];
    constructor(name,lastname,Ocupacion,Horario,Curp,Ine){
        super(name,lastname);
        this.Ocupacion=Ocupacion;
        this.#Horario=Horario;
        this.#Curp=Curp;
        this.#Ine=Ine;
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
     * @param {String} horario 
     */    
    updateHorario=function(horario){
        this.#Horario=horario;
    }

    /**
     * 
     * @param {String} curp 
     */
    updateCurp=function(curp){
        this.#Curp=Curp;
    }

    /**
     * 
     * @param {String} ine 
     */
    updateIne=function(ine){
        this.#Ine=ine;
    }
    
}
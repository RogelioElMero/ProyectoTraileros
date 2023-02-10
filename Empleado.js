class Empleado extends Persona{
    Ocupacion;
    #Horario;
    #Curp;
    #Ine;
    Ruta=[];
    /**
     * 
     * @param {String} name 
     * @param {String} lastname 
     * @param {String} Ocupacion 
     * @param {Date} Horario 
     * @param {String} Curp 
     * @param {String} Ine 
     */
    constructor(name,lastname,ocupacion,horario,curp,ine){
        super(name,lastname);
        this.Ocupacion=ocupacion;
        this.#Horario=horario;
        this.#Curp=curp;
        this.#Ine=ine;
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
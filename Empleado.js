class Empleado extends Persona{
    Ocupacion;
    Horario;
    Curp;
    Ine;
    #Ruta=[];
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
        this.Horario=horario;
        this.Curp=curp;
        this.Ine=ine;
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
    readEmpleado = function(){
        return `${this.ID}-${this.Nombre}-${this.Apellido}-${this.Ocupacion}-${this.Horario}-${this.Curp}-${this.Ine}`;
    }
    
    
}
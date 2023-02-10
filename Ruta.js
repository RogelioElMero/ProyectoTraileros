class Ruta{
    #HorarioPartida;
    #HorarioLlegada;
    #Destino;
    Trasporte;
    Empleado;
    Cliente;
    Servicio;

    /**
     * 
     * @param {Date} horarioP 
     * @param {Date} horarioL 
     * @param {String} destino 
     * @param {Trasporte} trasporte 
     * @param {Empleado} empleado 
     * @param {Cliente} cliente 
     * @param {Servicio} servicio 
     */
    constructor(horarioP,horarioL,destino,trasporte,empleado,cliente,servicio){
        this.#Destino=destino;
        this.#HorarioLlegada=horarioL;
        this.#HorarioPartida=horarioP;
        this.#Destino=destino;
        this.Trasporte=trasporte;
        this.Empleado=empleado;
        this.Cliente=cliente;
        this.Servicio=servicio;
    }

    /**
     * 
     * @param {Date} horarioPartida 
     */
    updateHorarioPartida=function(horarioPartida){
        this.#HorarioPartida=horarioPartida;
    }

    /**
     * 
     * @param {Date} horarioLlegada 
     */
    updateHorarioLlegada=function(horarioLlegada){
        this.#HorarioLlegada=horarioLlegada;
    }

    /**
     * 
     * @param {String} destino 
     */
    updateDestino=function(destino){
        this.#Destino=destino;
    }


}

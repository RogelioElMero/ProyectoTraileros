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
    }
    



}

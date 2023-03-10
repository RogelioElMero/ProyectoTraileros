class Ruta {
    ID;
    HorarioPartida;
    HorarioLlegada;
    Destino;
    #Trasporte;
    #Empleado;
    #Cliente;
    #Servicio;

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
    constructor(horarioP, horarioL, destino, trasporte, empleado, cliente, servicio) {
        this.Destino = destino;
        this.HorarioLlegada = horarioL;
        this.HorarioPartida = horarioP;
        this.Destino = destino;
        this.#Trasporte = trasporte;
        this.#Empleado = empleado;
        this.#Cliente = cliente;
        this.#Servicio = servicio;
    }
    /**
     * 
     * @param {Trasporte} Trasporte 
     */
    setTrasporte = function (Trasporte) {
        this.#Trasporte = Trasporte;
    }
    /**
     * 
     * @param {Empleado} Empleado 
     */
    setEmpleado = function (Empleado) {
        this.#Empleado = Empleado;
    }
    /**
     * 
     * @param {Cliente} Cliente 
     */
    setCliente = function (Cliente) {
        this.#Cliente = Cliente;
    }
    /**
     * 
     * @param {Servicio} Servicio 
     */
    setServicio = function (Servicio) {
        this.#Servicio = Servicio;
    }


    /**
     * 
     * @returns String
     */
    readRuta=function() {
        return `${this.ID}-${this.HorarioPartida}-${this.HorarioLlegada}-${this.Destino}-${this.#Trasporte.Placa}-${this.#Empleado.Nombre}-${this.#Cliente.Nombre}-${this.#Servicio.Costo}`;
    }
    
    /**
     * 
     * @returns String
     */
    arrayRuta = function(){
        return `${this.ID}--${this.HorarioPartida}--${this.HorarioLlegada}--${this.Destino}--${this.#Trasporte.ID}--${this.#Empleado.ID}--${this.#Cliente.ID}--${this.#Servicio.ID}`;
    }

    /**
	 * 
	 * @returns Int
	 */
	createId=function(){
        return Math.floor(Math.random() * 10000);
	}


    
}

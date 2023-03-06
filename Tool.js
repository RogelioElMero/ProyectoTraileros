class Tool {

    //obtiene los trasportes del local storage y los almacena en el arreglo de trasportes 
    /**
     * 
     * @param {string} parameter 
     * @returns array
     */
    static getDataTrasportesFromLocalStorage(parameter = "Trasportes") {

        let Array = [];
        let TrasportesArray = JSON.parse(localStorage.getItem(parameter));
        if (TrasportesArray != null && TrasportesArray != undefined) {
            for (let i = 0; i < TrasportesArray.length; i++) {

                let object = new Trasporte();
                object.ID = TrasportesArray[i].ID;
                object.Modelo = TrasportesArray[i].Modelo;
                object.Suspension = TrasportesArray[i].Suspension;
                object.CapacidadCarga = TrasportesArray[i].CapacidadCarga;
                object.NumeroSerie = TrasportesArray[i].NumeroSerie;
                object.Placa = TrasportesArray[i].Placa;
                object.TipoTracto = TrasportesArray[i].TipoTracto;
                Array.push(object);
            }
        }

        return Array;

    }

    //obtiene los empleados del local storage y los almacena en el arreglo de empleados
    /**
     * 
     * @param {string} parameter 
     * @returns array
     */
    static getDataEmpleadosFromLocalStorage(parameter = "Empleados") {

        let Array = [];
        let EmpleadosArray = JSON.parse(localStorage.getItem(parameter));
        if (EmpleadosArray != null && EmpleadosArray != undefined) {
            for (let i = 0; i < EmpleadosArray.length; i++) {

                let object = new Empleado();
                object.ID = EmpleadosArray[i].ID;
                object.Nombre = EmpleadosArray[i].Nombre;
                object.Apellido = EmpleadosArray[i].Apellido;
                object.Ocupacion = EmpleadosArray[i].Ocupacion;
                object.Horario = EmpleadosArray[i].Horario;
                object.Curp = EmpleadosArray[i].Curp;
                object.Ine = EmpleadosArray[i].Ine;
                Array.push(object);
            }
        }

        return Array;

    }

    //obtiene los clientes del local storage y los almacena en el arreglo de clientes
    /**
     * 
     * @param {string} parameter 
     * @returns array
     */
    static getDataClientesFromLocalStorage(parameter = "Clientes") {

        let Array = [];
        let ClientesArray = JSON.parse(localStorage.getItem(parameter));
        if (ClientesArray != null && ClientesArray != undefined) {
            for (let i = 0; i < ClientesArray.length; i++) {

                let object = new Cliente();
                object.ID = ClientesArray[i].ID;
                object.Nombre = ClientesArray[i].Nombre;
                object.Apellido = ClientesArray[i].Apellido;
                object.Referencia = ClientesArray[i].Referencia;
                Array.push(object);
            }
        }

        return Array;

    }

    //obtiene los servicios del local storage y los almacena en el arreglo de servicios
    /**
     * 
     * @param {string} parameter 
     * @returns array
     */
    static getDataServiciosFromLocalStorage(parameter = "Servicios") {

        let Array = [];
        let ServiciosArray = JSON.parse(localStorage.getItem(parameter));
        if (ServiciosArray != null && ServiciosArray != undefined) {
            for (let i = 0; i < ServiciosArray.length; i++) {

                let object = new Servicio();
                object.ID = ServiciosArray[i].ID;
                object.TipoMaterial = ServiciosArray[i].TipoMaterial;
                object.CantidadMaterial = ServiciosArray[i].CantidadMaterial;
                object.Costo = ServiciosArray[i].Costo;
                Array.push(object);
            }
        }

        return Array;

    }

    //obtiene las rutas del local storage y los almacena en el arreglo de rutas
    /**
     * 
     * @param {string} parameter 
     * @returns array
     */
    static getDataRutasFromLocalStorage(parameter = "Rutas") {

        let Array = [];
        let RutasArray = JSON.parse(localStorage.getItem(parameter));

        if (RutasArray != null && RutasArray != undefined) {

            for (let i = 0; i < RutasArray.length; i++) {

                let object = new Ruta();
                object.ID = RutasArray[i].ID;
                object.HorarioPartida = RutasArray[i].HorarioPartida;
                object.HorarioLlegada = RutasArray[i].HorarioLlegada;
                object.Destino = RutasArray[i].Destino;
                object.setTrasporte(this.ShareObject(Trasportes, RutasArray[i].Trasporte));
                object.setEmpleado(this.ShareObject(Empleados, RutasArray[i].Empleado));
                object.setCliente(this.ShareObject(Clientes, RutasArray[i].Cliente));
                object.setServicio(this.ShareObject(Servicios, RutasArray[i].Servicio));


                Array.push(object);
            }
        }
        return Array;

    }

    //funcion booleana que verifica si existe el id de la ruta en el array de rutas 
    /**
     * 
     * @param {array} ruta 
     * @param {int} ID 
     * @returns boolean 
     */  
    static rutaExists(ruta, ID) {
        let value = false;

        for (let i = 0; i < ruta.length; i++) {
            (ruta[i].ID == ID) ? value = true : false;
        }
        return value;
    }

    /*
    como el sistema requiere restrcciones las cuales se vasan en sus relaciones 
    es fundamental que estas este activas por lo que esta funcion las actrae y 
    las guarda donde deben de coincidir y verifica si estan estan repetivas para no ponerlas
    */ 
   /**
    * 
    * @param {array} Rutas 
    */
    static setRelatiosTheRutas(Rutas) {

        for (let i = 0; i < Rutas.length; i++) {
            let array = Rutas[i].arrayRuta();
            array = array.split("--");

            

            let id_trasporte = array[4];
            let id_empleado = array[5];
            let id_cliente = array[6];
            let id_servicio = array[7];
    
    
            id_trasporte=Tool.ShareIndex(Trasportes,id_trasporte);
            id_empleado=Tool.ShareIndex(Empleados,id_empleado);
            id_cliente=Tool.ShareIndex(Clientes,id_cliente);
            id_servicio=Tool.ShareIndex(Servicios,id_servicio);

            let arrayTrasporte=Trasportes[id_trasporte].arrayRuta();
            let arrayEmpleado=Empleados[id_empleado].arrayRuta();
            let arrayCliente=Clientes[id_cliente].arrayRuta();
            let arrayServicio=Servicios[id_servicio].arrayRuta();

            if(!this.rutaExists(arrayTrasporte,array[0])){
                Trasportes[id_trasporte].setRuta(Rutas[i]);
            }

            if(!this.rutaExists(arrayEmpleado,array[0])){
                Empleados[id_empleado].setRuta(Rutas[i]);
            }
            
            if(!this.rutaExists(arrayCliente,array[0])){
                Clientes[id_cliente].setRuta(Rutas[i]);
            }
            
            if(!this.rutaExists(arrayServicio,array[0])){
                Servicios[id_servicio].setRuta(Rutas[i]);
            }
            
        }

    }

    //funcion para encontrar un objeto con respecto al id y despues returnar este 
    /**
     * 
     * @param {array} Array 
     * @param {int} ID 
     * @returns object
     */
    static ShareObject(Array, ID) {
        let index;

        for (let i = 0; i < Array.length; i++) {
            (Array[i].ID == ID) ? index = i : false;
        }
        return Array[index];
    }

    //funcion para buscar el indice del array conrespecto al id
    /**
     * 
     * @param {array} Array 
     * @param {int} ID 
     * @returns index
     */
    static ShareIndex(Array, ID) {
        let index;

        for (let i = 0; i < Array.length; i++) {
            (Array[i].ID == ID) ? index = i : false;
        }
        return index;
    }


    //obtiene los empleados del local storage y los almacena en el arreglo de empeados
    /**
     * 
     * @param {string} parameter 
     * @returns array
     */
    static getEmpleadoLocalStorage(parameter = "Empleado") {
        let Array = [];
        let EmpleadoArray = JSON.parse(localStorage.getItem(parameter));

        for (let i = 0; i < EmpleadoArray.length; i++) {

            let object = new Empleado();
            object.ID = EmpleadoArray[i].ID;
            object.Nombre = EmpleadoArray[i].Nombre;
            object.Apellido = EmpleadoArray[i].Apellido;
            Array.push(object);
        }
        return Array;
    }

    //ingresa los datos del array en el local storage con su nombre dado
    /**
     * 
     * @param {string} parameter 
     * @param {array} data 
     */
    static setDataToLocalStorage(parameter, data) {
        localStorage.setItem(parameter, JSON.stringify(data));
    }

    //ingresa los datos del array rutas de forma diferente al ser un objeto con datos privados
    /**
     * 
     * @param {string} parameter 
     * @param {array} Rutas 
     */
    static setRutasFromLocalStorage(parameter = "Rutas", Rutas) {

        let rutas = [];
        let aux;
        for (let i = 0; i < Rutas.length; i++) {
            aux = Rutas[i].arrayRuta().split('--');
            let object = new Ruta();
            object.ID = aux[0];
            object.HorarioPartida = aux[1];
            object.HorarioLlegada = aux[2];
            object.Destino = aux[3];
            object.Trasporte = aux[4];
            object.Empleado = aux[5];
            object.Cliente = aux[6];
            object.Servicio = aux[7];
            rutas.push(object);
        }

        localStorage.setItem(parameter, JSON.stringify(rutas));

    }


}



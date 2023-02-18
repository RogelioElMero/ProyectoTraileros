class Tool {

    static getDataTrasportesFromLocalStorage(parameter = "Trasportes") {

        let Array = [];
        let TrasportesArray = JSON.parse(localStorage.getItem(parameter));
        for (let i = 0; i < TrasportesArray.length; i++) {

            let object = new Trasporte();
            object.Modelo = TrasportesArray[i].Modelo;
            object.Suspension = TrasportesArray[i].Suspension;
            object.CapacidadCarga = TrasportesArray[i].CapacidadCarga;
            object.NumeroSerie = TrasportesArray[i].NumeroSerie;
            object.Placa = TrasportesArray[i].Placa;
            object.TipoTracto = TrasportesArray[i].TipoTracto;
            Array.push(object);
        }

        return Array;



    }

    // static getDataRutasFromLocalStorage(parameter = "Rutas") {

    //     let Array = [];
    //     let array = JSON.parse(localStorage.getItem(parameter));
    //    for (let i = 0; i < array.length; i++){
       
    //         let object = new Ruta();
    //         object.HorarioPartida = array[i].HorarioPartida;
    //         object.HorarioLlegada = array[i].HorarioLlegada;
    //         object.Destino = array[i].Destino;
    //         object.setTrasporte(array[i].Trasporte);
    //         object.setEpleado(array[i].Empleado);
    //         object.setCliente(array[i].Cliente);
    //         object.setServicio(array[i].Servicio);

    //         Array.push(object);
    //    }
    //     return Array;

    // }

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


    static setDataToLocalStorage(parameter, data) {
        localStorage.setItem(parameter, JSON.stringify(data));


    }
}



class Tool {

    static getDataTrasportesFromLocalStorage(parameter="Trasportes"){

        let Array =[];
        let TrasportesArray = JSON.parse(localStorage.getItem(parameter));
     if(TrasportesArray!=null && TrasportesArray!=undefined){
        for(let i=0;i<TrasportesArray.length;i++){

            let object = new Trasporte();
            object.ID=TrasportesArray[i].ID;
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


    static getDataEmpleadosFromLocalStorage(parameter="Empleados"){

        let Array =[];
        let EmpleadosArray = JSON.parse(localStorage.getItem(parameter));
     if(EmpleadosArray!=null && EmpleadosArray!=undefined){
        for(let i=0;i<EmpleadosArray.length;i++){

            let object = new Empleado();
            object.ID=EmpleadosArray[i].ID;
            object.Nombre=EmpleadosArray[i].Nombre;
            object.Apellido=EmpleadosArray[i].Apellido;
            object.Ocupacion=EmpleadosArray[i].Ocupacion;
            object.Horario=EmpleadosArray[i].Horario;
            object.Curp=EmpleadosArray[i].Curp;
            object.Ine=EmpleadosArray[i].Ine;
            Array.push(object);
        }
    }

    return Array;

    }

    static getDataClientesFromLocalStorage(parameter="Clientes"){

        let Array =[];
        let ClientesArray = JSON.parse(localStorage.getItem(parameter));
     if(ClientesArray!=null && ClientesArray!=undefined){
        for(let i=0;i<ClientesArray.length;i++){

            let object = new Cliente();
            object.ID=ClientesArray[i].ID;
            object.Nombre=ClientesArray[i].Nombre;
            object.Apellido=ClientesArray[i].Apellido;
            object.Referencia=ClientesArray[i].Referencia;
            Array.push(object);
        }
    }

    return Array;

    }


    static getDataServicioosFromLocalStorage(parameter="Servicios"){

        let Array =[];
        let ServiciosArray = JSON.parse(localStorage.getItem(parameter));
     if(ServiciosArray!=null && ServiciosArray!=undefined){
        for(let i=0;i<ServiciosArray.length;i++){

            let object = new Servicio();
            object.ID=ServiciosArray[i].ID;
            object.TipoMaterial=ServiciosArray[i].TipoMaterial;
            object.CantidadMaterial=ServiciosArray[i].CantidadMaterial;
            object.Costo=ServiciosArray[i].Costo;
            Array.push(object);
        }
    }

    return Array;

    }

    static getDataRutasFromLocalStorage(parameter="Rutas"){

     let Array=[];
     let RutasArray = JSON.parse(localStorage.getItem(parameter));

     if(RutasArray!=null && RutasArray!=undefined){

     for(let i=0;i<RutasArray.length;i++){

        let object = new Ruta();
        object.HorarioPartida = RutasArray[i].HorarioPartida;
        object.HorarioLlegada = RutasArray[i].HorarioLlegada;
        object.Destino = RutasArray[i].Destino;
        object.setTrasporte(RutasArray[i].Trasporte);
        object.Empleado = RutasArray[i].Empleado;
        object.Cliente = RutasArray[i].Cliente;
        object.Servicio = RutasArray[i].Servicio;
        Array.push(object);
     }
    }
     return Array;

    }

 static getEmpleadoLocalStorage(parameter="Empleado"){
    let Array=[];
    let EmpleadoArray = JSON.parse(localStorage.getItem(parameter));

    for( let i=0;i< EmpleadoArray.length;i++){

        let object = new Empleado();
        object.ID = EmpleadoArray[i].ID;
        object.Nombre = EmpleadoArray[i].Nombre;
        object.Apellido = EmpleadoArray[i].Apellido;
        Array.push(object);
 }
    return Array;
}

    static setDataToLocalStorage(parameter,data) {
        localStorage.setItem(parameter,JSON.stringify(data));       
    }
}



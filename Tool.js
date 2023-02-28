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


    static getDataServiciosFromLocalStorage(parameter="Servicios"){

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
        object.ID=RutasArray[i].ID;
        object.HorarioPartida = RutasArray[i].HorarioPartida;
        object.HorarioLlegada = RutasArray[i].HorarioLlegada;
        object.Destino = RutasArray[i].Destino;
        object.setTrasporte(this.ShareObject(Trasportes,RutasArray[i].Trasporte));
        object.setEmpleado(this.ShareObject(Empleados,RutasArray[i].Empleado));
        object.setCliente(this.ShareObject(Clientes,RutasArray[i].Cliente));
        object.setServicio(this.ShareObject(Servicios,RutasArray[i].Servicio));
       
       
       
       
       
        Array.push(object);
     }
    }
     return Array;

    }


    static ShareObject(Array,ID){
    let index;

    for(let i =0; i<Array.length; i++){
            (Array[i].ID==ID)? index=i : false;
    }
    return  Array[index];
    }

    static ShareIndex(Array,ID){
        let index;
    
        for(let i =0; i<Array.length; i++){
                (Array[i].ID==ID)? index=i : false;
        }
        return  index;
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


static setRutasFromLocalStorage(parameter="Rutas",Rutas){
        
    let rutas = [];
    let aux;
    for(let i=0;i<Rutas.length;i++){
        aux=Rutas[i].arrayRuta().split('--');
        let object = new Ruta();
        object.ID=aux[0];
        object.HorarioPartida=aux[1];
        object.HorarioLlegada=aux[2];
        object.Destino=aux[3];
        object.Trasporte=aux[4];
        object.Empleado=aux[5];
        object.Cliente=aux[6];
        object.Servicio=aux[7];
        rutas.push(object);
    }

    localStorage.setItem(parameter,JSON.stringify(rutas));

}


}



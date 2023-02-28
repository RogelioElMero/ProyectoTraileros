


function updateTrasporte() {
    //obtiene los valores de cada input de trasporte

    let Model = document.getElementById('UpModel').value;
    let Suspension = document.getElementById("UpSuspension").value;
    let Capacity = document.getElementById("UpCapacity").value;
    let Plate = document.getElementById("UpPlate").value;
    let SerialNumber = document.getElementById("UpSerialNumber").value;
    let Tract = document.getElementById("UpTract").value;
    let option = document.getElementById("Tras").value;
    let index = Tool.ShareIndex(Trasportes, option);


    Trasportes[index].Modelo = Model;
    Trasportes[index].Suspension = Suspension;
    Trasportes[index].CapacidadCarga = Capacity;
    Trasportes[index].Placa = Plate;
    Trasportes[index].NumeroSerie = SerialNumber;
    Trasportes[index].TipoTracto = Tract;



    Tool.setDataToLocalStorage("Trasportes", Trasportes);

    alert("Vehiculo Actualizado exitosamente");
    //resetea los input
    document.getElementById("Tras").value = null;
    document.getElementById('UpModel').value = null;
    document.getElementById("UpSuspension").value = null;
    document.getElementById("UpCapacity").value = null;
    document.getElementById("UpPlate").value = null;
    document.getElementById("UpSerialNumber").value = null;
    document.getElementById("UpTract").value = null;

    //funciones para mostrar y llenar algunos campos

    tableTrasportes();
    tableRutas();
}

function updateEmpleado() {
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Empl").value;
    let NameE = document.getElementById('UpNameE').value;
    let LastnameE = document.getElementById("UpLastnameE").value;
    let Occupation = document.getElementById("UpOccupation").value;
    let Schedule = document.getElementById("UpSchedule").value;
    let Curp = document.getElementById("UpCurp").value;
    let Ine = document.getElementById("UpIne").value;
    let index = Tool.ShareIndex(Empleados, option);

    Empleados[index].Nombre = NameE;
    Empleados[index].Apellido = LastnameE;
    Empleados[index].Ocupacion = Occupation;
    Empleados[index].Horario = Schedule;
    Empleados[index].Curp = Curp;
    Empleados[index].Ine = Ine;



    Tool.setDataToLocalStorage("Empleados", Empleados);

    alert("Empleado Actualizado exitosamente");
    //resetea los input 
    document.getElementById("Empl").value = null;
    document.getElementById('UpNameE').value = null;
    document.getElementById("UpLastnameE").value = null;
    document.getElementById("UpOccupation").value = null;
    document.getElementById("UpSchedule").value = null;
    document.getElementById("UpCurp").value = null;
    document.getElementById("UpIne").value = null;



    //funciones para mostrar y llenar algunos campos

    tableEmpleados();
    tableRutas();
}

function updateCliente() {
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Clie").value;
    let NameC = document.getElementById('UpNameC').value;
    let LastnameC = document.getElementById("UpLastnameC").value;
    let References = document.getElementById("UpReferences").value;
    let index = Tool.ShareIndex(Clientes, option);

    Clientes[index].Nombre = NameC;
    Clientes[index].Apellido = LastnameC;
    Clientes[index].Referencia = References;



    Tool.setDataToLocalStorage("Clientes", Clientes);

    alert("Cliente Actualizado exitosamente");
    //resetea los input
    document.getElementById("Clie").value = null;
    document.getElementById('UpNameC').value = null;
    document.getElementById("UpLastnameC").value = null;
    document.getElementById("UpReferences").value = null;




    //funciones para mostrar y llenar algunos campos

    tableClientes();
    tableRutas();
}

function updateServicio() {
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Serv").value;
    let TypeMaterial = document.getElementById('UpTypeMaterial').value;
    let AmountMaterial = document.getElementById("UpAmountMaterial").value;
    let Cost = document.getElementById("UpCost").value;
    let index = Tool.ShareIndex(Servicios, option);


    Servicios[index].TipoMaterial = TypeMaterial;
    Servicios[index].CantidadMaterial = AmountMaterial;
    Servicios[index].Costo = Cost;



    Tool.setDataToLocalStorage("Servicios", Servicios);

    alert("Servicio Actualizado exitosamente");
    //resetea los input
    document.getElementById("Serv").value = null;
    document.getElementById('UpTypeMaterial').value = null;
    document.getElementById("UpAmountMaterial").value = null;
    document.getElementById("UpCost").value = null;




    //funciones para mostrar y llenar algunos campos

    tableServicios();
    tableRutas();
}

function updateRuta() {
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Ruta").value;
    let ScheduleExit = document.getElementById('UpScheduleExit').value;
    let SchedulArrive = document.getElementById("UpSchedulArrive").value;
    let Destiny = document.getElementById("UpDestiny").value;
    let index=Tool.ShareIndex(Rutas,option);

    Rutas[index].HorarioPartida = ScheduleExit;
    Rutas[index].HorarioLlegada = SchedulArrive;
    Rutas[index].Destino = Destiny;

    let Tra = document.getElementById("Tra").value;
    let tras = Trasportes[Tra];
    Rutas[index].setTrasporte(tras);

    let Emp = document.getElementById("Emp").value;
    let emp = Empleados[Emp];
    Rutas[index].setEmpleado(emp);

    let Cli = document.getElementById("Cli").value;
    let cli = Clientes[Cli];
    Rutas[index].setCliente(cli);


    let Ser = document.getElementById("Ser").value;
    let ser = Servicios[Ser];
    Rutas[index].setServicio(ser);

    Tool.setRutasFromLocalStorage("Rutas", Rutas);

    alert("Ruta Actualizado exitosamente");

    tras.setRuta(Rutas[index]);
    emp.setRuta(Rutas[index]);
    cli.setRuta(Rutas[index]);
    ser.setRuta(Rutas[index]);

    //resetea los input
    document.getElementById("Ruta").value=null;
    document.getElementById('UpScheduleExit').value=null;
    document.getElementById("UpSchedulArrive").value=null;
    document.getElementById("UpDestiny").value=null;
    document.getElementById("Tra").value=null;
    document.getElementById("Emp").value=null;
    document.getElementById("Cli").value=null;
    document.getElementById("Ser").value=null;

    //funciones para mostrar y llenar algunos campos

    tableServicios();
    tableRutas();
}
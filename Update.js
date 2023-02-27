


function updateTrasporte() {
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Tras").value;
    let Model = document.getElementById('UpModel').value;
    let Suspension = document.getElementById("UpSuspension").value;
    let Capacity = document.getElementById("UpCapacity").value;
    let Plate = document.getElementById("UpPlate").value;
    let SerialNumber = document.getElementById("UpSerialNumber").value;
    let Tract = document.getElementById("UpTract").value;

    Trasportes[option].Modelo = Model;
    Trasportes[option].Suspension = Suspension;
    Trasportes[option].CapacidadCarga = Capacity;
    Trasportes[option].Placa = Plate;
    Trasportes[option].NumeroSerie = SerialNumber;
    Trasportes[option].TipoTracto = Tract;



    Tool.setDataToLocalStorage("Trasportes", Trasportes);

    alert("Vehiculo Actualizado exitosamente");
    //resetea los input
    option = null;
    Model = null;
    Suspension = null;
    Capacity = null;
    Plate = null;
    SerialNumber = null;
    Tract = null;

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

    Empleados[option].Nombre = NameE;
    Empleados[option].Apellido = LastnameE;
    Empleados[option].Ocupacion = Occupation;
    Empleados[option].Horario = Schedule;
    Empleados[option].Curp = Curp;
    Empleados[option].Ine = Ine;



    Tool.setDataToLocalStorage("Empleados", Empleados);

    alert("Empleado Actualizado exitosamente");
    //resetea los input
    option = null;
    NameE = null;
    LastnameE = null;
    Occupation = null;
    Schedule = null;
    Curp = null;
    Ine = null;



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


    Clientes[option].Nombre = NameC;
    Clientes[option].Apellido = LastnameC;
    Clientes[option].Referencia = References;



    Tool.setDataToLocalStorage("Clientes", Clientes);

    alert("Cliente Actualizado exitosamente");
    //resetea los input
    option = null;
    NameC = null;
    LastnameC = null;
    References = null;




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


    Servicios[option].TipoMaterial = TypeMaterial;
    Servicios[option].CantidadMaterial = AmountMaterial;
    Servicios[option].Costo = Cost;



    Tool.setDataToLocalStorage("Servicios", Servicios);

    alert("Servicio Actualizado exitosamente");
    //resetea los input
    option = null;
    TypeMaterial = null;
    AmountMaterial = null;
    Cost = null;




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


    Rutas[option].HorarioPartida = ScheduleExit;
    Rutas[option].HorarioLlegada = SchedulArrive;
    Rutas[option].Destino = Destiny;

    let Tra = document.getElementById("Tra").value;
    let tras = Trasportes[Tra];
    Rutas[option].setTrasporte(tras);

    let Emp = document.getElementById("Emp").value;
    let emp = Empleados[Emp];
    Rutas[option].setEmpleado(emp);

    let Cli = document.getElementById("Cli").value;
    let cli = Clientes[Cli];
    Rutas[option].setCliente(cli);


    let Ser = document.getElementById("Ser").value;
    let ser = Servicios[Ser];
    Rutas[option].setServicio(ser);

    Tool.setRutasFromLocalStorage("Rutas", Rutas);

    alert("Ruta Actualizado exitosamente");

    tras.setRuta(Rutas[option]);
    emp.setRuta(Rutas[option]);
    cli.setRuta(Rutas[option]);
    ser.setRuta(Rutas[option]);

    //resetea los input
    option = null;
    ScheduleExit = null;
    SchedulArrive = null;
    Destiny = null;




    //funciones para mostrar y llenar algunos campos

    tableServicios();
    tableRutas();
}
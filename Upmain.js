function fillTrasporte(option) {
    let Model = document.getElementById('UpModel');
    let Suspension = document.getElementById("UpSuspension");
    let Capacity = document.getElementById("UpCapacity");
    let Plate = document.getElementById("UpPlate");
    let SerialNumber = document.getElementById("UpSerialNumber");
    let Tract = document.getElementById("UpTract");

    document.getElementById("Tras").value = Trasportes[option].ID;

    Model.value = Trasportes[option].Modelo;
    Suspension.value = Trasportes[option].Suspension;
    Capacity.value = Trasportes[option].CapacidadCarga;
    Plate.value = Trasportes[option].Placa;
    SerialNumber.value = Trasportes[option].NumeroSerie;
    Tract.value = Trasportes[option].TipoTracto;

}

function fillEmpleado(option) {
    //obtiene los valores de cada input de Empleados
    let NameE = document.getElementById('UpNameE');
    let LastnameE = document.getElementById("UpLastnameE");
    let Occupation = document.getElementById("UpOccupation");
    let Schedule = document.getElementById("UpSchedule");
    let Curp = document.getElementById("UpCurp");
    let Ine = document.getElementById("UpIne");

    document.getElementById("Empl").value = Empleados[option].ID;

    NameE.value = Empleados[option].Nombre;
    LastnameE.value = Empleados[option].Apellido;
    Occupation.value = Empleados[option].Ocupacion;
    Schedule.value = Empleados[option].Horario;
    Curp.value = Empleados[option].Curp;
    Ine.value = Empleados[option].Ine;
}


function fillCliente(option) {

    let NameC = document.getElementById('UpNameC');
    let LastnameC = document.getElementById("UpLastnameC");
    let References = document.getElementById("UpReferences");

    document.getElementById("Clie").value = Clientes[option].ID;

    NameC.value = Clientes[option].Nombre;
    LastnameC.value = Clientes[option].Apellido;
    References.value = Clientes[option].Referencia;

}


function fillServicio(option) {

    let TypeMaterial = document.getElementById('UpTypeMaterial');
    let AmountMaterial = document.getElementById("UpAmountMaterial");
    let Cost = document.getElementById("UpCost");

    document.getElementById("Serv").value = Servicios[option].ID;

    TypeMaterial.value = Servicios[option].TipoMaterial;
    AmountMaterial.value = Servicios[option].CantidadMaterial;
    Cost.value = Servicios[option].Costo;

}

function fillRuta(option) {

    let R = Rutas[option].arrayRuta();
    let array = R.split("--");

    let ScheduleExit = document.getElementById('UpScheduleExit');
    let SchedulArrive = document.getElementById("UpSchedulArrive");
    let Destiny = document.getElementById("UpDestiny");
    let Tra = document.getElementById("Tra");
    let Emp = document.getElementById("Emp");
    let Cli = document.getElementById("Cli");
    let Ser = document.getElementById("Ser");


    document.getElementById("Ruta").value = array[0];
    ScheduleExit.value = array[1];
    SchedulArrive.value = array[2];
    Destiny.value = array[3];
    let indexT = Tool.ShareIndex(Trasportes, array[4]);
    let indexE = Tool.ShareIndex(Empleados, array[5]);
    let indexC = Tool.ShareIndex(Clientes, array[6]);
    let indexS = Tool.ShareIndex(Servicios, array[7]);

    Tra.value = indexT;
    Emp.value = indexE;
    Cli.value = indexC;
    Ser.value = indexS;


}
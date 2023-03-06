

//llena los inputs correspondientes a los dela tabla al dar clic en el boton de update en la tabla
function fillTrasporte(option) {
    //obtiene los imput
    let Model = document.getElementById('UpModel');
    let Suspension = document.getElementById("UpSuspension");
    let Capacity = document.getElementById("UpCapacity");
    let Plate = document.getElementById("UpPlate");
    let SerialNumber = document.getElementById("UpSerialNumber");
    let Tract = document.getElementById("UpTract");
    //segun el indice del arreglo llena los input en la tabla
    document.getElementById("Tras").value = Trasportes[option].ID;
    //muestra los datos en cada input 
    Model.value = Trasportes[option].Modelo;
    Suspension.value = Trasportes[option].Suspension;
    Capacity.value = Trasportes[option].CapacidadCarga;
    Plate.value = Trasportes[option].Placa;
    SerialNumber.value = Trasportes[option].NumeroSerie;
    Tract.value = Trasportes[option].TipoTracto;

}
//llena los inputs correspondientes a los dela tabla al dar clic en el boton de update en la tabla
function fillEmpleado(option) {
   //obtiene los imput
    let NameE = document.getElementById('UpNameE');
    let LastnameE = document.getElementById("UpLastnameE");
    let Occupation = document.getElementById("UpOccupation");
    let Schedule = document.getElementById("UpSchedule");
    let Curp = document.getElementById("UpCurp");
    let Ine = document.getElementById("UpIne");
    //segun el indice del arreglo llena los input en la tabla

    document.getElementById("Empl").value = Empleados[option].ID;

    NameE.value = Empleados[option].Nombre;
    LastnameE.value = Empleados[option].Apellido;
    Occupation.value = Empleados[option].Ocupacion;
    Schedule.value = Empleados[option].Horario;
    Curp.value = Empleados[option].Curp;
    Ine.value = Empleados[option].Ine;
}

//llena los inputs correspondientes a los dela tabla al dar clic en el boton de update en la tabla
function fillCliente(option) {
//obtiene los imput
    let NameC = document.getElementById('UpNameC');
    let LastnameC = document.getElementById("UpLastnameC");
    let References = document.getElementById("UpReferences");
    //segun el indice del arreglo llena los input en la tabla

    document.getElementById("Clie").value = Clientes[option].ID;

    NameC.value = Clientes[option].Nombre;
    LastnameC.value = Clientes[option].Apellido;
    References.value = Clientes[option].Referencia;

}

//llena los inputs correspondientes a los dela tabla al dar clic en el boton de update en la tabla
function fillServicio(option) {
//obtiene los imput
    let TypeMaterial = document.getElementById('UpTypeMaterial');
    let AmountMaterial = document.getElementById("UpAmountMaterial");
    let Cost = document.getElementById("UpCost");

    //segun el indice del arreglo llena los input en la tabla
    document.getElementById("Serv").value = Servicios[option].ID;

    TypeMaterial.value = Servicios[option].TipoMaterial;
    AmountMaterial.value = Servicios[option].CantidadMaterial;
    Cost.value = Servicios[option].Costo;

}
//llena los inputs correspondientes a los dela tabla al dar clic en el boton de update en la tabla
function fillRuta(option) {
    //obtiene en array los datos correspondientes a esa ruta apartir del indice o su posicion 
    let R = Rutas[option].arrayRuta();
    let array = R.split("--");
    
    //obtiene los imput y los select 
    let ScheduleExit = document.getElementById('UpScheduleExit');
    let SchedulArrive = document.getElementById("UpSchedulArrive");
    let Destiny = document.getElementById("UpDestiny");
    let Tra = document.getElementById("Tra");
    let Emp = document.getElementById("Emp");
    let Cli = document.getElementById("Cli");
    let Ser = document.getElementById("Ser");

    //segun el indice del arreglo llena los input con respecto a la tabla 
    document.getElementById("Ruta").value = array[0];
    ScheduleExit.value = array[1];
    SchedulArrive.value = array[2];
    Destiny.value = array[3];

    /*segun los datos de la ruta llena los select,
     como estos solo muestran los id que seles asigno se busca su indice en el array para encontrarlos mas facilmente
     esto apartir de la funcion buscar indice     
    */
     let indexT = Tool.ShareIndex(Trasportes, array[4]);
    let indexE = Tool.ShareIndex(Empleados, array[5]);
    let indexC = Tool.ShareIndex(Clientes, array[6]);
    let indexS = Tool.ShareIndex(Servicios, array[7]);

    //uvicamos los select en la opcion correspondiente al indice
    Tra.value = indexT;
    Emp.value = indexE;
    Cli.value = indexC;
    Ser.value = indexS;


}
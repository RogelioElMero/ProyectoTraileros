

//funcion que se encarga de actualizar el trasporte en dasboard
function updateTrasporte(e) {
    
    //evento que se ejecuta previo a actualizar el trasporte
    e.preventDefault();
    
    //obtiene los valores de cada input de trasporte
    let Model = document.getElementById('UpModel').value;
    let Suspension = document.getElementById("UpSuspension").value;
    let Capacity = document.getElementById("UpCapacity").value;
    let Plate = document.getElementById("UpPlate").value;
    let SerialNumber = document.getElementById("UpSerialNumber").value;
    let Tract = document.getElementById("UpTract").value;
    let option = document.getElementById("Tras").value;
    
    //obtiene el la posicion del indice en el arreglo Trasportes esto desde el input que muestra el id
    let index = Tool.ShareIndex(Trasportes, option);

    //cambia los valores del objeto con respecto a los nuevos
    Trasportes[index].Modelo = Model;
    Trasportes[index].Suspension = Suspension;
    Trasportes[index].CapacidadCarga = Capacity;
    Trasportes[index].Placa = Plate;
    Trasportes[index].NumeroSerie = SerialNumber;
    Trasportes[index].TipoTracto = Tract;

    //sube el arreglo de Trasportes al localstorage 
    Tool.setDataToLocalStorage("Trasportes", Trasportes);


    //manda un mensaje de la actualizacion 
    alert("Vehiculo Actualizado exitosamente");
    //resetea los input
    document.getElementById("Tras").value = null;
    document.getElementById('UpModel').value = null;
    document.getElementById("UpSuspension").value = null;
    document.getElementById("UpCapacity").value = null;
    document.getElementById("UpPlate").value = null;
    document.getElementById("UpSerialNumber").value = null;
    document.getElementById("UpTract").value = null;

    //funciones para mostrar los trasportes en la tabla correspondiente
    tableTrasportes();

    //se extraen las rutas de nuevos para ver los cambios efectuados y se actualiza la tabla 
    Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
    tableRutas();
}

//funcion que se encarga de actualizar el empleado en dasboard
function updateEmpleado(e) {
    //evento que se ejecuta previo a actualizar el empleado
    e.preventDefault();
    //obtiene los valores de cada input de empleado
    let option = document.getElementById("Empl").value;
    let NameE = document.getElementById('UpNameE').value;
    let LastnameE = document.getElementById("UpLastnameE").value;
    let Occupation = document.getElementById("UpOccupation").value;
    let Schedule = document.getElementById("UpSchedule").value;
    let Curp = document.getElementById("UpCurp").value;
    let Ine = document.getElementById("UpIne").value;

     //obtiene el la posicion del indice en el arreglo Empleados esto desde el input que muestra el id
    let index = Tool.ShareIndex(Empleados, option);

    //cambia los valores del objeto con respecto a los nuevos 
    Empleados[index].Nombre = NameE;
    Empleados[index].Apellido = LastnameE;
    Empleados[index].Ocupacion = Occupation;
    Empleados[index].Horario = Schedule;
    Empleados[index].Curp = Curp;
    Empleados[index].Ine = Ine;


    //sube el arreglo de Empleados al localstorage 
    Tool.setDataToLocalStorage("Empleados", Empleados);
    
    //manda un mensaje de la actualizacion 
    alert("Empleado Actualizado exitosamente");
    //resetea los input 
    document.getElementById("Empl").value = null;
    document.getElementById('UpNameE').value = null;
    document.getElementById("UpLastnameE").value = null;
    document.getElementById("UpOccupation").value = null;
    document.getElementById("UpSchedule").value = null;
    document.getElementById("UpCurp").value = null;
    document.getElementById("UpIne").value = null;

    //muestra los empleados del array en la tabla correspondiente 
    tableEmpleados();

      //se extraen las rutas de nuevos para ver los cambios efectuados y se actualiza la tabla
    Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
    tableRutas();
}

//funcion que se encarga de actualizar el cliente en dasboard
function updateCliente(e) {
    ////evento que se ejecuta previo a actualizar el cliente
    e.preventDefault();
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Clie").value;
    let NameC = document.getElementById('UpNameC').value;
    let LastnameC = document.getElementById("UpLastnameC").value;
    let References = document.getElementById("UpReferences").value;

    //obtiene su posicione en el array contrespecto al id
    let index = Tool.ShareIndex(Clientes, option);

    //cambia los valores del objeto con respecto a los nuevos 
    Clientes[index].Nombre = NameC;
    Clientes[index].Apellido = LastnameC;
    Clientes[index].Referencia = References;

    // sube el array de los clientes al localstorage
    Tool.setDataToLocalStorage("Clientes", Clientes);
    
    //manda un mensaje de la actualizacion 
    alert("Cliente Actualizado exitosamente");
    //resetea los input
    document.getElementById("Clie").value = null;
    document.getElementById('UpNameC').value = null;
    document.getElementById("UpLastnameC").value = null;
    document.getElementById("UpReferences").value = null;

    //muentra de nuevo la tabla de clientes 
    tableClientes();
    //extrae el arreglo del local storage para mostrar la tabla de rutas de nuevo
    Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
    //muestra la tabla de rutas
    tableRutas();
}

//funcion que se encarga de actualizar el servicio en dasboard
function updateServicio(e) {
    //se ejecuta antes de actualizar los datos
    e.preventDefault();

    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Serv").value;    
    let TypeMaterial = document.getElementById('UpTypeMaterial').value;
    let AmountMaterial = document.getElementById("UpAmountMaterial").value;
    let Cost = document.getElementById("UpCost").value;
    
    //obtiene la ubicacion del servicio en el array con el de option 
    let index = Tool.ShareIndex(Servicios, option);

    //segun el objeto cambia los datos por los nuevos ingresados 
    Servicios[index].TipoMaterial = TypeMaterial;
    Servicios[index].CantidadMaterial = AmountMaterial;
    Servicios[index].Costo = Cost;

    //sube el array al localstorage 
    Tool.setDataToLocalStorage("Servicios", Servicios);
    
    //manda un mensaje de la actualizacion 
    alert("Servicio Actualizado exitosamente");
    //resetea los input
    document.getElementById("Serv").value = null;
    document.getElementById('UpTypeMaterial').value = null;
    document.getElementById("UpAmountMaterial").value = null;
    document.getElementById("UpCost").value = null;

    //vueleve a mostra la tabla de los servicios 
    tableServicios();
    //extrae los datos de la rutas en localstorage
    Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
    //muestra las rutas del array en su tabla correspondiente
    tableRutas();
}

//funcion que se encarga de actualizar el rutas en dasboard

function updateRuta(e){
    //funcion que se ejecuta antes de actualizar
    e.preventDefault();
    //obtiene los valores de cada input de trasporte
    let option = document.getElementById("Ruta").value;
    let ScheduleExit = document.getElementById('UpScheduleExit').value;
    let SchedulArrive = document.getElementById("UpSchedulArrive").value;
    let Destiny = document.getElementById("UpDestiny").value;
    //se obtiene la ubicacion de la ruta en el array de rutas
    let index = Tool.ShareIndex(Rutas, option);

    //en la ruta sustituye los valores publicos de forma facil
    Rutas[index].HorarioPartida = ScheduleExit;
    Rutas[index].HorarioLlegada = SchedulArrive;
    Rutas[index].Destino = Destiny;

    //se obtiene los datos de la ruta de forma en cadena, estos se dividen en una array para su utilidad
    let array=Rutas[index].arrayRuta();
    array=array.split("--");
    
    //obtenemos los valores de los id de cada objeto que esta relacionado
    let id_trasporte = array[4];
    let id_empleado = array[5];
    let id_cliente = array[6];
    let id_servicio = array[7];
    //buscamos su posicion individualmente en su array correspondiente
    id_trasporte = Tool.ShareIndex(Trasportes, id_trasporte);
    id_empleado = Tool.ShareIndex(Empleados, id_empleado);
    id_cliente = Tool.ShareIndex(Clientes, id_cliente);
    id_servicio = Tool.ShareIndex(Servicios, id_servicio);

    //obtenemos el array de las rutas en las cuales
    // se encuentra cada objeto relacionado esto de cada objeto
    let arrayTrasporte = Trasportes[id_trasporte].arrayRuta();
    let arrayEmpleado = Empleados[id_empleado].arrayRuta();
    let arrayCliente = Clientes[id_cliente].arrayRuta();
    let arrayServicio = Servicios[id_servicio].arrayRuta();

    //se busca la posicion dela ruta en cada array de los objetos 
    let indexRuEnTra = Tool.ShareIndex(arrayTrasporte, Rutas[index].ID);
    let indexRuEnEmp = Tool.ShareIndex(arrayEmpleado, Rutas[index].ID);
    let indexRuEnCli = Tool.ShareIndex(arrayCliente, Rutas[index].ID);
    let indexRuEnSer = Tool.ShareIndex(arrayServicio, Rutas[index].ID);

    //eliminamos la ruta ya la almacenada posee datos pasados esto en cada objeto
    Trasportes[id_trasporte].deleteRuta(indexRuEnTra);
    Empleados[id_empleado].deleteRuta(indexRuEnEmp);
    Clientes[id_cliente].deleteRuta(indexRuEnCli);
    Servicios[id_servicio].deleteRuta(indexRuEnSer);
    
    /*
    obtenemos los valores escojidos de los select dependiendo el id escojido en cada uno 
    despues se busca ese objeto y se agrega ala ruta finalmente esto concada objeto 
    que esta relacionado 
    */
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

    //sube las rutas en el local storage
    Tool.setRutasFromLocalStorage("Rutas", Rutas);
    
    //implementa las relaciones en cada objeto correspondiente 
    tras.setRuta(Rutas[index]);
    emp.setRuta(Rutas[index]);
    cli.setRuta(Rutas[index]);
    ser.setRuta(Rutas[index]);
    
    //manda un mesaje de actualizado
    alert("Ruta Actualizado exitosamente");

    //resetea los input y vuelve a llamar la funcion de los select para ver que no hayan datos perdidos 
    document.getElementById("Ruta").value = null;
    document.getElementById('UpScheduleExit').value = null;
    document.getElementById("UpSchedulArrive").value = null;
    document.getElementById("UpDestiny").value = null;
    SelecClientes();
    SelecEmpleados();
    SelecTrasportes();
    SelecServicios();
    
    //document.getElementById("Tra").value = null;
    //document.getElementById("Emp").value = null;
    //document.getElementById("Cli").value = null;
    //document.getElementById("Ser").value = null;

    //obtiene las rutas subidas a local storage y las muestra en su tabla correspondiente 
    Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
    tableRutas();
}
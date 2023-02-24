

//funcion para guardar los Trasportes
function saveTrasporte() {
    //obtiene los valores de cada input de trasporte
    let Model = document.getElementById('Model').value;
    let Suspension = document.getElementById("Suspension").value;
    let Capacity = document.getElementById("Capacity").value;
    let Plate = document.getElementById("Plate").value;
    let SerialNumber = document.getElementById("SerialNumber").value;
    let Tract = document.getElementById("Tract").value;




    //se declara un object tipo trasporte
    let Trs = new Trasporte(Model, Suspension, Capacity, Plate, SerialNumber, Tract);
    Trs.ID=Trs.createId();
    //guarda el Trasporte en un arreglo en main 
    Trasportes.push(Trs);

    Tool.setDataToLocalStorage("Trasportes",Trasportes);

    alert("Vehiculo guardado exitosamente");
    //resetea los input
    document.getElementById('Model').value = null;
    document.getElementById("Suspension").value = null;
    document.getElementById("Capacity").value = null;
    document.getElementById("Plate").value = null;
    document.getElementById("SerialNumber").value = null;
    document.getElementById("Tract").value = null;

    //funciones para mostrar y llenar algunos campos
    SelecTrasportes();
    tableTrasportes();
    

}

//funccion para guardar los empleados
function saveEmpleado() {
    //obtiene los valores de cada input de Empleado
    let NameE = document.getElementById("NameE").value;
    let LastnameE = document.getElementById("LastnameE").value;
    let Occupation = document.getElementById("Occupation").value;
    let Schedule = document.getElementById("Schedule").value;
    let Curp = document.getElementById("Curp").value;
    let Ine = document.getElementById("Ine").value;


    //se declara un object tipo empleado
    let Emp = new Empleado(NameE, LastnameE, Occupation, Schedule, Curp, Ine);
    Emp.ID=Emp.createId();
    
    //guarda el Empleado en un arreglo
    Empleados.push(Emp);
    
    //guardarlo  en el local storage
    Tool.setDataToLocalStorage("Empleados",Empleados);
    alert("Empleado guardado exitosamente");
    
    //resetea los input
    document.getElementById('NameE').value = null;
    document.getElementById('LastnameE').value = null;
    document.getElementById('Occupation').value = null;
    document.getElementById('Schedule').value = null;
    document.getElementById('Curp').value = null;
    document.getElementById('Ine').value = null;

    //funciones para mostrar y llenar algunos campos
    SelecEmpleados();
    tableEmpleados();
}

//funcion para guardar los clientes
function GuardarCliente() {
    //obtiene los valores de cada input de cliente
    let NameC = document.getElementById("NameC").value;
    let LastnameC = document.getElementById("LastnameC").value;
    let References = document.getElementById("References").value;

    //se declara un object tipo cliente
    let Cln = new Cliente(NameC, LastnameC, References);
    Cln.ID=Cln.createId();
    //guarda el Cliente en un arreglo en main 
    Clientes.push(Cln);
    Tool.setDataToLocalStorage("Clientes",Clientes);
    alert("Cliente guardado exitosamente");
    //resetea los input
    document.getElementById('NameC').value = null;
    document.getElementById('LastnameC').value = null;
    document.getElementById('References').value = null;

    //funciones para mostrar y llenar algunos campos
    SelecClientes();
    tableClientes();
}

//funcion para guardar los servicios
function GuardarServicio() {
    //obtiene los valores de cada input de servicio
    let TypeMaterial = document.getElementById("TypeMaterial").value;
    let AmountMaterial = document.getElementById("AmountMaterial").value;
    let Cost = document.getElementById("Cost").value;

    //se declara un object tipo servicio    
    let Srv = new Servicio(TypeMaterial, AmountMaterial, Cost);
    Srv.ID=Srv.createId();
    //guarda el Servicio en un arreglo en main  
    Servicios.push(Srv);
    Tool.setDataToLocalStorage("Servicios",Servicios);
    alert("Servicio guardado exitosamente");
    //resetea los input
    document.getElementById('TypeMaterial').value = null;
    document.getElementById('AmountMaterial').value = null;
    document.getElementById('Cost').value = null;

    //funciones para mostrar y llenar algunos campos
    SelecServicios();
    tableServicios();
}



//funcion para guardar la ruta
function GuardarRuta() {
    //obtiene los valores de cada input de ruta
    let ScheduleExit = document.getElementById("ScheduleExit").value;
    let SchedulArrive = document.getElementById("SchedulArrive").value;
    let Destiny = document.getElementById("Destiny").value;

    let Tra = document.getElementById("Tra").value;
    let tras = Trasportes[Tra];

    let Emp = document.getElementById("Emp").value;
    let emp = Empleados[Emp];

    let Cli = document.getElementById("Cli").value;
    let cli = Clientes[Cli];

    let Ser = document.getElementById("Ser").value;
    let ser = Servicios[Ser];

    //se declara un object se tipo ruta
    let R = new Ruta(ScheduleExit, SchedulArrive, Destiny, tras, emp, cli, ser);
        R.ID=R.createId();
        
    //llama las funciones set de cada tipo para guardar una ruta en los demas ibjetos creados y crear la relacion marcada en el diagrama 
    tras.setRuta(R);
    emp.setRuta(R);
    cli.setRuta(R);
    ser.setRuta(R);


    //guarda la Ruta en un arreglo en main 
    Rutas.push(R);

    Tool.setDataToLocalStorage("Rutas",Rutas);



    alert("Ruta guardada exitosamente");

    //resetea los input
    document.getElementById("ScheduleExit").value = null;
    document.getElementById("SchedulArrive").value = null;
    document.getElementById("Destiny").value = null;
    document.getElementById("Tra").value = null;
    document.getElementById("Emp").value = null;
    document.getElementById("Cli").value = null;
    document.getElementById("Ser").value = null;

    //funcion para llenar la tabla de rutas
    tableRutas();


}
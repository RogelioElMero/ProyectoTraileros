//elimina un trasporte 
function deleteTrasporte(option) {
    //pregunta si realmente lo quiere hacer
    if (confirm("¿desea eliminar este elemento?")) {

        //verifica si no tiene relaciion con una ruta para negar la eliminacion o ejecutarla 
        if (Trasportes[option].arrayRuta() == 0) {
            Trasportes.splice(option, 1);
            //sube la actualizacion del array la local storage
            Tool.setDataToLocalStorage("Trasportes", Trasportes);

        } else {
            //no ejecuta la eliminacion por una relacion existente
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }
        //muestra de nuevo la tabla de trasportes y el select de rutas
        tableTrasportes();
        SelecTrasportes();
    }

}

//elimina el empleado registrado
function deleteEmpleado(option) {
    // pregunta si realmente lo quiere hacer 
    if (confirm("¿desea eliminar este elemento?")) {

        //verifica si no tiene relaciion con una ruta para negar la eliminacion o ejecutarla
        if (Empleados[option].arrayRuta() == 0) {
            Empleados.splice(option, 1);
            //sube la actualizacion del array la local storage
            Tool.setDataToLocalStorage("Empleados", Empleados);

        } else {
            //no ejecuta la eliminacion por una relacion existente
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }
        //muestra de nuevo la tabla de empleados y el select de rutas
        tableEmpleados();
        SelecEmpleados();
    }
}

//elimina el cliente registrado
function deleteCliente(option) {
    //pregunta si realmente lo quiere hacer
    if (confirm("¿desea eliminar este elemento?")) {

        //verifica si no tiene relaciion con una ruta para negar la eliminacion o ejecutarla
        if (Clientes[option].arrayRuta() == 0) {
            Clientes.splice(option, 1);
            //sube la actualizacion del array la local storage
            Tool.setDataToLocalStorage("Clientes", Clientes);

        } else {
            //no ejecuta la eliminacion por una relacion existente
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }
        //muestra de nuevo la tabla de clientes y el select de rutas
        tableClientes();
        SelecClientes();

    }
}

//elimina el servicio registrado
function deleteServicio(option) {
    //pregunta si realmente lo quiere hacer
    if (confirm("¿desea eliminar este elemento?")) {

        //verifica si no tiene relaciion con una ruta para negar la eliminacion o ejecutarla
        if (Servicios[option].arrayRuta() == 0) {
            Servicios.splice(option, 1);
            //sube la actualizacion del array la local storage
            Tool.setDataToLocalStorage("Servicios", Servicios);

        } else {
            //no ejecuta la eliminacion por una relacion existente
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }
        //muestra de nuevo la tabla de clientes y el select de rutas
        tableServicios();
        SelecServicios();
    }
}

//elimina la ruta registrada 
function deleteRuta(option) {
    //pregunta si realmente lo quiere hacer
    if (confirm("¿desea eliminar este elemento?")) {
        //obtiene datos del array
        let array = Rutas[option].arrayRuta();
        array = array.split("--");

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
        let indexRuEnTra = Tool.ShareIndex(arrayTrasporte, Rutas[option].ID);
        let indexRuEnEmp = Tool.ShareIndex(arrayEmpleado, Rutas[option].ID);
        let indexRuEnCli = Tool.ShareIndex(arrayCliente, Rutas[option].ID);
        let indexRuEnSer = Tool.ShareIndex(arrayServicio, Rutas[option].ID);

        //eliminamos la ruta ya la almacenada posee datos pasados esto en cada objeto
        Trasportes[id_trasporte].deleteRuta(indexRuEnTra);
        Empleados[id_empleado].deleteRuta(indexRuEnEmp);
        Clientes[id_cliente].deleteRuta(indexRuEnCli);
        Servicios[id_servicio].deleteRuta(indexRuEnSer);


        //en el array rutas eliminamos la ruta y subimos la actualizacion al local storage
        Rutas.splice(option, 1);
        Tool.setRutasFromLocalStorage("Rutas", Rutas);
        //obtenemos de nuevo todo desde local storage
        Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
        Tool.setRelatiosTheRutas(Rutas);
    }
    //mostramos la actualizacion de las rutas 
    tableRutas();


}
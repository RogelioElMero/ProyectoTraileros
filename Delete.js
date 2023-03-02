function deleteTrasporte(option) {
    if (confirm("¿desea eliminar este elemento?")) {

        if (Trasportes[option].arrayRuta() == 0) {
            Trasportes.splice(option, 1);
            Tool.setDataToLocalStorage("Trasportes", Trasportes);

        } else {
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }

        tableTrasportes();
        SelecTrasportes();
    }

}
function deleteEmpleado(option) {
    if (confirm("¿desea eliminar este elemento?")) {

        if (Empleados[option].arrayRuta() == 0) {
            Empleados.splice(option, 1);
            Tool.setDataToLocalStorage("Empleados", Empleados);

        } else {
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }

        tableEmpleados();
        SelecEmpleados();
    }
}

function deleteCliente(option) {
    if (confirm("¿desea eliminar este elemento?")) {

        if (Clientes[option].arrayRuta() == 0) {
            Clientes.splice(option, 1);
            Tool.setDataToLocalStorage("Clientes", Clientes);

        } else {
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }

        tableClientes();
        SelecClientes();

    }
}
function deleteServicio(option) {
    if (confirm("¿desea eliminar este elemento?")) {

        if (Servicios[option].arrayRuta() == 0) {
            Servicios.splice(option, 1);
            Tool.setDataToLocalStorage("Servicios", Servicios);

        } else {
            alert("accion No ejecutada, elimine la ruta-s registrada con este ID");

        }

        tableServicios();
        SelecServicios();


    }
}

function deleteRuta(option) {

    if (confirm("¿desea eliminar este elemento?")) {
        let array = Rutas[option].arrayRuta();
        array = array.split("--");

        let id_trasporte = array[4];
        let id_empleado = array[5];
        let id_cliente = array[6];
        let id_servicio = array[7];


        id_trasporte = Tool.ShareIndex(Trasportes, id_trasporte);
        id_empleado = Tool.ShareIndex(Empleados, id_empleado);
        id_cliente = Tool.ShareIndex(Clientes, id_cliente);
        id_servicio = Tool.ShareIndex(Servicios, id_servicio);


        let arrayTrasporte = Trasportes[id_trasporte].arrayRuta();
        let arrayEmpleado = Empleados[id_empleado].arrayRuta();
        let arrayCliente = Clientes[id_cliente].arrayRuta();
        let arrayServicio = Servicios[id_servicio].arrayRuta();


        let indexRuEnTra = Tool.ShareIndex(arrayTrasporte, Rutas[option].ID);
        let indexRuEnEmp = Tool.ShareIndex(arrayEmpleado, Rutas[option].ID);
        let indexRuEnCli = Tool.ShareIndex(arrayCliente, Rutas[option].ID);
        let indexRuEnSer = Tool.ShareIndex(arrayServicio, Rutas[option].ID);


        Trasportes[id_trasporte].deleteRuta(indexRuEnTra);
        Empleados[id_empleado].deleteRuta(indexRuEnEmp);
        Clientes[id_cliente].deleteRuta(indexRuEnCli);
        Servicios[id_servicio].deleteRuta(indexRuEnSer);



        Rutas.splice(option, 1);
        Tool.setRutasFromLocalStorage("Rutas", Rutas);
        Rutas = Tool.getDataRutasFromLocalStorage("Rutas");
        Tool.setRelatiosTheRutas(Rutas);
    }
    tableRutas();  
    

}
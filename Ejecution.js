tableTrasportes();
tableServicios();
tableClientes(); 
tableEmpleados();
tableRutas();
(Tool.getDataClientesFromLocalStorage().length>0) ? SelecClientes() :false;
(Tool.getDataTrasportesFromLocalStorage().length>0) ? SelecTrasportes() :false;
(Tool.getDataEmpleadosFromLocalStorage().length>0) ? SelecEmpleados() :false;
(Tool.getDataServiciosFromLocalStorage().length>0) ? SelecServicios() :false;

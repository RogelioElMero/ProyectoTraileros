Trasportes = Tool.getDataTrasportesFromLocalStorage("Trasportes");
Clientes = Tool.getDataClientesFromLocalStorage("Clientes");
Servicios = Tool.getDataServiciosFromLocalStorage("Servicios");
Empleados =Tool.getDataEmpleadosFromLocalStorage("Empleados") ;
Rutas = Tool.getDataRutasFromLocalStorage("Rutas");

tableTrasportes();
tableServicios();
tableClientes(); 
tableEmpleados();
tableRutas();

(Tool.getDataClientesFromLocalStorage().length>0) ? SelecClientes() :false;
(Tool.getDataTrasportesFromLocalStorage().length>0) ? SelecTrasportes() :false;
(Tool.getDataEmpleadosFromLocalStorage().length>0) ? SelecEmpleados() :false;
(Tool.getDataServiciosFromLocalStorage().length>0) ? SelecServicios() :false;

(Tool.getDataRutasFromLocalStorage().length>0)? Tool.setRelatiosTheRutas(Rutas) : false;

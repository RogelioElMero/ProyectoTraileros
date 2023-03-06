//ejecuta las tablas con datos guardados de los objetos
tableTrasportes();
tableServicios();
tableClientes(); 
tableEmpleados();
tableRutas();

//rellena los select con los datos almacenados en los array si es que estos existen
(Tool.getDataClientesFromLocalStorage().length>0) ? SelecClientes() :false;
(Tool.getDataTrasportesFromLocalStorage().length>0) ? SelecTrasportes() :false;
(Tool.getDataEmpleadosFromLocalStorage().length>0) ? SelecEmpleados() :false;
(Tool.getDataServiciosFromLocalStorage().length>0) ? SelecServicios() :false;

//ejecuta las relaciones de las rutas si esque huviera una en el array
(Tool.getDataRutasFromLocalStorage().length>0)? Tool.setRelatiosTheRutas(Rutas) : false;
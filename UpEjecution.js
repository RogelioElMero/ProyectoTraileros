//estos codigos se ejecuntan almenos una vez en el programa con el fin de mostrar los datos que ya tenemos en el localstorage 
//se llenan lso arreglos de main con el local storage
Trasportes = Tool.getDataTrasportesFromLocalStorage("Trasportes");
Clientes = Tool.getDataClientesFromLocalStorage("Clientes");
Servicios = Tool.getDataServiciosFromLocalStorage("Servicios");
Empleados =Tool.getDataEmpleadosFromLocalStorage("Empleados") ;
Rutas = Tool.getDataRutasFromLocalStorage("Rutas");

//se llenan las tablas de los diferentes modelos o objetos
tableTrasportes();
tableServicios();
tableClientes(); 
tableEmpleados();
tableRutas();

//llena los datos de los select en el apartado de rutas de el dashboard
(Tool.getDataClientesFromLocalStorage().length>0) ? SelecClientes() :false;
(Tool.getDataTrasportesFromLocalStorage().length>0) ? SelecTrasportes() :false;
(Tool.getDataEmpleadosFromLocalStorage().length>0) ? SelecEmpleados() :false;
(Tool.getDataServiciosFromLocalStorage().length>0) ? SelecServicios() :false;

//activa las relaciones con la rutas y los otros objetos
(Tool.getDataRutasFromLocalStorage().length>0)? Tool.setRelatiosTheRutas(Rutas) : false;

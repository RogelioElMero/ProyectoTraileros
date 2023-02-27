tableTrasportes();
tableServicios();
tableClientes(); 
tableEmpleados();
tableRutas();
(Tool.getDataClientesFromLocalStorage().length>0) ? SelecClientes() :false;
(Tool.getDataTrasportesFromLocalStorage().length>0) ? SelecTrasportes() :false;
(Tool.getDataEmpleadosFromLocalStorage().length>0) ? SelecEmpleados() :false;
(Tool.getDataServiciosFromLocalStorage().length>0) ? SelecServicios() :false;

(Tool.getDataTrasportesFromLocalStorage().length>0) ?  SelecUpTrasportes() :false;
(Tool.getDataEmpleadosFromLocalStorage().length>0) ?  SelecUpEmpleados() :false;
(Tool.getDataClientesFromLocalStorage().length>0) ?  SelecUpClientes() :false;
(Tool.getDataServiciosFromLocalStorage().length>0) ?  SelecUpServicios() :false;
(Tool.getDataRutasFromLocalStorage().length>0) ?  SelecUpRutas() :false;


//en testeo todo lo de abajo 

//selectTrasporte.addEventListener("change",fillTrasportes());

function fillTrasportes(option){
    let Model = document.getElementById('UpModel').value;
    let Suspension = document.getElementById("UpSuspension").value;
    let Capacity = document.getElementById("UpCapacity").value;
    let Plate = document.getElementById("UpPlate").value;
    let SerialNumber = document.getElementById("UpSerialNumber").value;
    let Tract = document.getElementById("UpTract").value;
   
    Model=Trasportes[option].Model;
    Suspension=Trasportes[option].Suspension;
    Capacity=Trasportes[option].Capacity;
    Plate=Trasportes[option].Plate;
    SerialNumber=Trasportes[option].SerialNumber;
    Tract=Trasportes[option].Tract;
    


}
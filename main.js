var Rutas=[];
var Trasportes=[];
var Clientes=[];
var Servicios=[];
var Empleados=[];

GuardarTrasporte = function(){
    let Modelo = document.getElementById('Modelo').value;
    let Suspencion= document.getElementById("Suspencion").value;
    let Capacidad=document.getElementById("Capacidad").value;
    let Placa=document.getElementById("Placa").value;
    let NumeroSerie=document.getElementById("NumeroSerie").value;
    let Tracto=document.getElementById("Tracto").value;
  
    let trs = new Trasporte(Modelo,Suspencion,Capacidad,Placa,NumeroSerie,Tracto);
  
    Trasportes.push(trs);

    alert("Vehiculo guardado exitosamente");
}




GuardarEmpleado = function(){

}




GuardarCliente = function(){




}


GuardarServicio = function(){

}
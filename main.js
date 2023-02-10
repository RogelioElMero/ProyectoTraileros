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
    
    document.getElementById('Modelo').value = null;
    document.getElementById('Suspencion').value = null;
    document.getElementById('Capacidad').value = null;
    document.getElementById('Placa').value = null;
    document.getElementById('NumeroSerie').value = null;
    document.getElementById('Tracto').value = null;

}


GuardarEmpleado = function(){
    let Nombre = document.getElementById("NombreE").value;
    let Apellido = document.getElementById("ApellidoE").value;
    let Ocupacion = document.getElementById("Ocupacion").value;
    let Horario = document.getElementById("Horario").value;
    let Curp = document.getElementById("Curp").value;
    let Ine =  document.getElementById("Ine").value;

    let Emp= new Empleado(Nombre,Apellido,Ocupacion,Horario,Curp,Ine);

    Empleados.push(Emp);
    alert("Empleado guardado exitosamente");

    document.getElementById('NombreE').value = null;
    document.getElementById('ApellidoE').value = null;
    document.getElementById('Ocupacion').value = null;
    document.getElementById('Horario').value = null;
    document.getElementById('Curp').value = null;
    document.getElementById('Ine').value = null;


}


GuardarCliente = function(){
    let Nombre = document.getElementById("NombreC").value;
    let Apellido = document.getElementById("ApellidoC").value;
    let Referencia = document.getElementById("Referencias").value;

    let Cln=new Cliente(Nombre,Apellido,Referencia);

    Clientes.push(Cln);
    alert("Cliente guardado exitosamente");

    document.getElementById('NombreC').value = null;
    document.getElementById('ApellidoC').value = null;
    document.getElementById('Referencias').value = null;
}


GuardarServicio = function(){
    let TipoMat = document.getElementById("TipoMat").value; 
    let CantidadMat = document.getElementById("CantidadMat").value;
    let Costo = document.getElementById("Costo").value;

    let Srv = new Servicio(TipoMat,CantidadMat,Costo);

    Servicios.push(Srv);
    alert("Servicio guardado exitosamente");

    document.getElementById('TipoMat').value = null;
    document.getElementById('CantidadMat').value = null;
    document.getElementById('Costo').value = null;
}
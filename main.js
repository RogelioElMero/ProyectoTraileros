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

    mostrarTrasportesSelc();
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

    mostrarEmpleadoSelc();
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

    mostrarClienteSelc();
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

    mostrarServicioSelc();
}

GuardarRuta=function(){
    let HorarioPartida = document.getElementById("HorarioS").value;
    let HorarioLlegada = document.getElementById("HorarioL").value;
    let Destino = document.getElementById("Destino").value;

    let Tra=document.getElementById("Tra").value;
    let tras=Trasportes[Tra];
        
    let Emp = document.getElementById("Emp").value;
    let emp=Empleados[Emp];

    let Cli=document.getElementById("Cli").value;
    let cli=Clientes[Cli];

    let Ser=document.getElementById("Ser").value;
    let ser=Servicios[Ser];

    let R = new Ruta(HorarioPartida,HorarioLlegada,Destino,tras,emp,cli,ser);

    tras.setRuta(R);
    emp.setRuta(R);
    cli.setRuta(R);
    ser.setRuta(R);

    Rutas.push(R);
    
    alert("Ruta guardada exitosamente");

    document.getElementById("HorarioS").value=null;
    document.getElementById("HorarioL").value=null;
    document.getElementById("Destino").value=null;
    document.getElementById("Tra").value=null;
    document.getElementById("Emp").value=null;
    document.getElementById("Cli").value=null;
    document.getElementById("Ser").value=null;
    

}









mostrarTrasportesSelc=function (){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('Tra');
    select.innerHTML = '';
    for(let i = 0; i<Trasportes.length; i++){
        options += `<option value="${i}">${Trasportes[i].Modelo}</option>`;
    }

    select.innerHTML = options;
}

mostrarEmpleadoSelc=function(){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('Emp');
    select.innerHTML = '';
    for(let i = 0; i<Empleados.length; i++){
        options += `<option value="${i}">${Empleados[i].Nombre}</option>`;
    }

    select.innerHTML = options;
}

mostrarClienteSelc=function(){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('Cli');
    select.innerHTML = '';
    for(let i = 0; i<Clientes.length; i++){
        options += `<option value="${i}">${Clientes[i].Nombre}</option>`;
    }

    select.innerHTML = options;
}

mostrarServicioSelc=function(){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('Ser');
    select.innerHTML = '';
    for(let i = 0; i<Servicios.length; i++){
        options += `<option value="${i}">${Servicios[i].TipoMaterial}</option>`;
    }

    select.innerHTML = options;
}



//areglos que funcionaran como tipo base de datos en todo el programa 

var Trasportes = Tool.getDataTrasportesFromLocalStorage("Trasportes");
var Clientes = Tool.getDataClientesFromLocalStorage("Clientes");
var Servicios = Tool.getDataServiciosFromLocalStorage("Servicios");
var Empleados =Tool.getDataEmpleadosFromLocalStorage("Empleados") ;
var Rutas = Tool.getDataRutasFromLocalStorage("Rutas");




//llena los campos faltantes de trasportes en rutas para escojer uno 
function SelecTrasportes() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Tra');
    select.innerHTML = '';
   
    for (let i = 0; i < Trasportes.length; i++) {
        options += `<option value="${i}">${Trasportes[i].ID}</option>`;
    }

    select.innerHTML = options;
}

//llena los campos faltantes de empleado en rutas para escojer uno
function SelecEmpleados() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Emp');
    select.innerHTML = '';
    for (let i = 0; i < Empleados.length; i++) {
        options += `<option value="${i}">${Empleados[i].ID}</option>`;
    }

    select.innerHTML = options;
}

//llena los campos faltantes de clientes en rutas para escojer uno
function SelecClientes() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Cli');
    select.innerHTML = '';
    for (let i = 0; i < Clientes.length; i++) {
        options += `<option value="${i}">${Clientes[i].ID}</option>`;
    }

    select.innerHTML = options;
}

//llena los campos faltantes de servicios en rutas para escojer uno
function SelecServicios() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Ser');
    select.innerHTML = '';
    for (let i = 0; i < Servicios.length; i++) {
        options += `<option value="${i}">${Servicios[i].ID}</option>`;
    }

    select.innerHTML = options;
}

function moveUpdate(){
    window.location.href="dasboard.html";    
}

function moveSave(){
    window.location.href="index.html";
}
var Rutas = [];
var Trasportes = [];
var Clientes = [];
var Servicios = [];
var Empleados = [];













function SelecTrasportes() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Tra');
    select.innerHTML = '';
    for (let i = 0; i < Trasportes.length; i++) {
        options += `<option value="${i}">${Trasportes[i].Modelo}</option>`;
    }

    select.innerHTML = options;
}

function SelecEmpleados() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Emp');
    select.innerHTML = '';
    for (let i = 0; i < Empleados.length; i++) {
        options += `<option value="${i}">${Empleados[i].Nombre}</option>`;
    }

    select.innerHTML = options;
}

function SelecClientes() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Cli');
    select.innerHTML = '';
    for (let i = 0; i < Clientes.length; i++) {
        options += `<option value="${i}">${Clientes[i].Nombre}</option>`;
    }

    select.innerHTML = options;
}

function SelecServicios() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Ser');
    select.innerHTML = '';
    for (let i = 0; i < Servicios.length; i++) {
        options += `<option value="${i}">${Servicios[i].TipoMaterial}</option>`;
    }

    select.innerHTML = options;
}



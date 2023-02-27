function SelecUpTrasportes() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Tras');
    select.innerHTML = '';
   
    for (let i = 0; i < Trasportes.length; i++) {
        options += `<option value="${i}">${Trasportes[i].ID}</option>`;
    }

    select.innerHTML = options;
}

function SelecUpEmpleados() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Empl');
    select.innerHTML = '';
   
    for (let i = 0; i < Empleados.length; i++) {
        options += `<option value="${i}">${Empleados[i].ID}</option>`;
    }

    select.innerHTML = options;
}

function SelecUpClientes() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Clie');
    select.innerHTML = '';
   
    for (let i = 0; i < Clientes.length; i++) {
        options += `<option value="${i}">${Clientes[i].ID}</option>`;
    }

    select.innerHTML = options;
}

function SelecUpServicios() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Serv');
    select.innerHTML = '';
   
    for (let i = 0; i < Servicios.length; i++) {
        options += `<option value="${i}">${Servicios[i].ID}</option>`;
    }

    select.innerHTML = options;
}

function SelecUpRutas() {
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select = document.getElementById('Ruta');
    select.innerHTML = '';
   
    for (let i = 0; i < Rutas.length; i++) {
        options += `<option value="${i}">${Rutas[i].ID}</option>`;
    }

    select.innerHTML = options;
}
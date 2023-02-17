//tabla para mostrar los Trasportes 
function tablaTrasportes() {
    let contTabla = '<tr><th>MODELO</th><th>SUSPENCION</th><th>CAPACIDAD</th><th>PLACAS</th><th>NUMERO DE SERIE</th><th>TRACTO</th></tr>';
    let Tabla = document.getElementById('tablaTrasportes');

    document.getElementById('tablaTrasportes').innerHTML = null;

    let trasporte;
    let array;

    for (let i = 0; i < Trasportes.length; i++) {
        trasporte = Trasportes[i].readTrasporte();
        array = trasporte.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td></tr>`;
    }

    Tabla.innerHTML = contTabla;
}

function tablaEmpleados() {
    let contTabla = '<tr> <th>ID</th> <th>NOMBRE</th> <th>APELLIDO</th> <th>OCUPACION</th> <th>HORARIO</th> <th>CURP</th> <th>INE</th> </tr>';
    let Tabla = document.getElementById('tablaEmpleados');

    document.getElementById('tablaEmpleados').innerHTML = null;

    let empleado;
    let array;

    for (let i = 0; i < Empleados.length; i++) {
        empleado = Empleados[i].readEmpleado();
        array = empleado.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> </tr>`;
    }

    Tabla.innerHTML = contTabla;
}

function tablaClientes() {
    let contTabla = '<tr> <th>ID</th> <th>NOMBRE CLIENTE</th> <th>APELLIDO CLIENTE</th> <th>REFERENCIAS</th> </tr>';
    let Tabla = document.getElementById('tablaClientes');

    document.getElementById('tablaClientes').innerHTML = null;

    let clientes;
    let array;

    for (let i = 0; i < Clientes.length; i++) {
        clientes = Clientes[i].readCliente();
        array = clientes.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> </tr>`;
    }

    Tabla.innerHTML = contTabla;
}

function tablaServicios() {
    let contTabla = '<tr> <th>MATERIAL </th> <th>CANTIDAD</th> <th>COSTO</th> </tr>';
    let Tabla = document.getElementById('tablaServicios');

    document.getElementById('tablaServicios').innerHTML = null;

    let servicios;
    let array;

    for (let i = 0; i < Servicios.length; i++) {
        servicios = Servicios[i].readServicio();
        array = servicios.split('-');
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> </tr>`;
    }

    Tabla.innerHTML = contTabla;
}

function tablaRutas() {
    let contTabla = '<tr> <th>SALIDA </th> <th>LLEGADA</th> <th>DESTINO</th> <th>TRASPORTE</th> <th>EMPLEADO</th> <th>CLIENTE</th> <th>SERVICIO</th> </tr>';
    let Tabla = document.getElementById('tablaRutas');

    document.getElementById('tablaRutas').innerHTML = null;

    let rutas;
    let array;

    for (let i = 0; i < Rutas.length; i++) {
        rutas = Rutas[i].readRuta();
        array = rutas.split('-');
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> </tr>`;
    }

    Tabla.innerHTML = contTabla;
}
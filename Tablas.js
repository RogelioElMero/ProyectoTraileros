//tabla para mostrar los Trasportes 
function tableTrasportes() {
    //crea los encabezados de la tabla y se optiene la poision 
    let contTabla = '<tr><th>MODELO</th><th>SUSPENCION</th><th>CAPACIDAD</th><th>PLACAS</th><th>NUMERO DE SERIE</th><th>TRACTO</th></tr>';
    let Tabla = document.getElementById('tableTrasportes');

    //elimina temporalmente la tabla
    Tabla.innerHTML= '';

    let trasporte;
    let array;

    //lee las posiciones del arreglo y concatena las filas  
    for (let i = 0; i < Trasportes.length; i++) {
        trasporte = Trasportes[i].readTrasporte();
        array = trasporte.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td></tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}

//tabla para mostrar los Empleados
function tableEmpleados() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla = '<tr> <th>ID</th> <th>NOMBRE</th> <th>APELLIDO</th> <th>OCUPACION</th> <th>HORARIO</th> <th>CURP</th> <th>INE</th> </tr>';
    let Tabla = document.getElementById('tableEmpleados');

    //elimina temporalmente la tabla
    document.getElementById('tableEmpleados').innerHTML = null;

    let empleado;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Empleados.length; i++) {
        empleado = Empleados[i].readEmpleado();
        array = empleado.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}

//tabla para mostrar los Clientes
function tableClientes() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla = '<tr> <th>ID</th> <th>NOMBRE CLIENTE</th> <th>APELLIDO CLIENTE</th> <th>REFERENCIAS</th> </tr>';
    let Tabla = document.getElementById('tableClientes');

    //elimina temporalmente la tabla
    document.getElementById('tableClientes').innerHTML = null;

    let clientes;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Clientes.length; i++) {
        clientes = Clientes[i].readCliente();
        array = clientes.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}

//tabla para mostrar los Servicios
function tableServicios() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla = '<tr> <th>MATERIAL </th> <th>CANTIDAD</th> <th>COSTO</th> </tr>';
    let Tabla = document.getElementById('tableServicios');

    //elimina temporalmente la tabla
    document.getElementById('tableServicios').innerHTML = null;

    let servicios;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Servicios.length; i++) {
        servicios = Servicios[i].readServicio();
        array = servicios.split('-');
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}

//funcion para mostrar las Rutas
function tableRutas() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla = '<tr> <th>SALIDA </th> <th>LLEGADA</th> <th>DESTINO</th> <th>TRASPORTE</th> <th>EMPLEADO</th> <th>CLIENTE</th> <th>SERVICIO</th> </tr>';
    let Tabla = document.getElementById('tableRutas');

    //elimina temporalmente la tabla
   // document.getElementById('tableRutas').innerHTML = '';

    let rutas;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Rutas.length; i++) {
        rutas = Rutas[i].readRuta();
        array = rutas.split('-');
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}
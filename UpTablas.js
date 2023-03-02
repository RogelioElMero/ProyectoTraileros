

//tabla para mostrar los Trasportes 
function tableTrasportes() {
    //crea los encabezados de la tabla y se optiene la poision 
    let contTabla='';
    let Tabla = document.getElementById('tableBodyTrasportes');

    if(Trasportes.length>0){
    let trasporte;
    let array;

    //lee las posiciones del arreglo y concatena las filas  
    for (let i = 0; i < Trasportes.length; i++) {
        trasporte = Trasportes[i].readTrasporte();
        array = trasporte.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> <td><button onclick="fillTrasporte(${i})" class="btn btn-dark">UPDATE</button></td> <td><button onclick="deleteTrasporte(${i})" class="btn btn-dark">DELETE</button></td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}else{
    Tabla.innerHTML=contTabla;
}
}

//tabla para mostrar los Empleados
function tableEmpleados() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla ='';
    let Tabla = document.getElementById('tableBodyEmpledos');

    if(Empleados.length>0){

    let empleado;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Empleados.length; i++) {
        empleado = Empleados[i].readEmpleado();
        array = empleado.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> <td><button onclick="fillEmpleado(${i})" class="btn btn-dark">UPDATE</button></td> <td><button onclick="deleteEmpleado(${i})" class="btn btn-dark">DELETE</button></td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}else{
    Tabla.innerHTML=contTabla;
}
}

//tabla para mostrar los Clientes
function tableClientes() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla ='';
    let Tabla = document.getElementById('tableBodyClientes');

    if(Clientes.length>0){

    let clientes;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Clientes.length; i++) {
        clientes = Clientes[i].readCliente();
        array = clientes.split('-');
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td>  <td><button onclick="fillCliente(${i})" class="btn btn-dark">UPDATE</button></td> <td><button onclick="deleteCliente(${i})" class="btn btn-dark">DELETE</button></td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}else{
    Tabla.innerHTML=contTabla;
}
}

//tabla para mostrar los Servicios
function tableServicios() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla ='';
    let Tabla = document.getElementById('tableBodyServicios');

    if(Servicios.length>0){
    let servicios;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Servicios.length; i++) {
        servicios = Servicios[i].readServicio();
        array = servicios.split('-');
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td>  <td><button onclick="fillServicio(${i})" class="btn btn-dark">UPDATE</button></td> <td><button onclick="deleteServicio(${i})" class="btn btn-dark">DELETE</button></td> </tr>`;
    }

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}else{
    Tabla.innerHTML=contTabla;
}
}

//funcion para mostrar las Rutas
function tableRutas() {
    //crea los encabezados de la tabla y se optiene la poision
    let contTabla ='';
    let Tabla = document.getElementById('tableBodyRutas');

    Rutas=Tool.getDataRutasFromLocalStorage("Rutas");

    if(Rutas.length>0){
    let rutas;
    let array;

    //lee las posiciones del arreglo y concatena las filas 
    for (let i = 0; i < Rutas.length; i++) {
        rutas = Rutas[i].readRuta();
        array = rutas.split('-');
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> <td>${array[7]}</td>  <td><button onclick="fillRuta(${i})" class="btn btn-dark">UPDATE</button></td> <td><button onclick="deleteRuta(${i})" class="btn btn-dark">DELETE</button></td> </tr>`;
    }
    

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}else{
    Tabla.innerHTML=contTabla;
}

}
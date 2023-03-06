

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
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> 
        
        <td><button class="cssbuttons-io-button" onclick="fillTrasporte(${i})">Update
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        </div>
      </button></td> 

        <td class="Delete"><button class="noselect" onclick="deleteTrasporte(${i})"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button> </td>    
        
        </tr>`;
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
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> 
        <td><button class="cssbuttons-io-button" onclick="fillEmpleado(${i})">Update
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="https://cdn-icons-png.flaticon.com/512/3888/3888277.png"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        </div>
      </button></td> 
        
      
        <td class="Delete" ><button class="noselect"onclick="deleteEmpleado(${i})"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button></td>
         
        
        
        </tr>`;
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
        contTabla += `<tr><td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td>  
        <td><button class="cssbuttons-io-button" onclick="fillCliente(${i})">Update
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        </div>
      </button></td> 

        <td class="Delete"><button class="noselect" onclick="deleteCliente(${i})"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button></td>
        
        
        
        </tr>`;
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
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> 
        <td><button class="cssbuttons-io-button" onclick="fillServicio(${i})">Update
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        </div>
      </button></td> 
        <td class="Delete"><button class="noselect" onclick="deleteServicio(${i})"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button></td>

        </tr>`;
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
        contTabla += `<tr> <td>${array[0]}</td> <td>${array[1]}</td> <td>${array[2]}</td> <td>${array[3]}</td> <td>${array[4]}</td> <td>${array[5]}</td> <td>${array[6]}</td> <td>${array[7]}</td>  
        <td><button class="cssbuttons-io-button" onclick="fillRuta(${i})">Update
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        </div>
      </button></td>
        <td class="Delete"><button class="noselect" onclick="deleteRuta(${i})"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button></td>
        
        
        
        </tr>`;
    }
    

    //muestra toda la tabla creada en su posicion 
    Tabla.innerHTML = contTabla;
}else{
    Tabla.innerHTML=contTabla;
}

}
class Tool {


    /**
     * 
     * @param {parameter} parameter 
     * @returns array
     */

    static strToSlug (cadena){
        return encodeURIComponent(cadena).replace(/%20/g, '-');
    }

    static getTrasportesFromLocalStorage(parameter = "Traspor") {

        let Array = [];
        let TrasportesArray = JSON.parse( localStorage.getItem(parameter));
        TrasportesArray.forEach(element => {

            let object = new Trasporte();
            object.Modelo = element.Modelo;
            object.Suspencion = element.Suspencion;
            object.CapacidadCarga = element.CapacidadCarga;
            object.Placa = element.Placa;
            object.NumeroSerie = element.NumeroSerie;
            object.TipoTracto = element.TipoTracto;
            Array.push(object);
        });
        return Array;
    }

    static setDataForLocalStorge(parameter, data){
        localStorage.setItem(parameter,JSON.stringify(data));

    }
    static getDatFromLocalStorage(parameter){
        return JSON.parse( localStorage.getItem(parameter));
    }






}
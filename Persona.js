class Persona{
	ID;
	Nombre;
	Apellido;
	/**
	 * 
	 * @param {String} name 
	 * @param {String} lastname 
	 */
	constructor(name,lastname){

		this.Nombre=name;
		this.Apellido=lastname;
}


	/**
	 * 
	 * @returns Int
	 */
	createId=function(){
        return Math.floor(Math.random() * 10000);
	}


}
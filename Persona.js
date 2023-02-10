class Persona{
	#ID;
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
		this.ID=this.CreateId();

}


	/**
	 * 
	 * @returns Int
	 */
	CreateId=function(){
        return Math.floor(Math.random() * 1000);
	}


}
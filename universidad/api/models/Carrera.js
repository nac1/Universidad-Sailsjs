/**
 * Carrera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	autoCreatedAt: false,
	autoUpdatedAt: false,
  attributes: {
  	id_carrera: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },
    nombre:{
    	type: 'string',
    	size: 25,
    	required:true
    },
    carreras:{
    	collection:'alumno', //entidad o modelo del lado muchos
    	via:'cursa'
    }


  }
};


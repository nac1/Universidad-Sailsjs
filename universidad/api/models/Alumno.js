/**
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,

  attributes: {
  	matricula: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },
    nombre:{
    	type: 'string',
    	size: 25,
    	required:true
    },
    apellido_paterno:{
    	type: 'string',
    	size: 25,
    	required:true
    },
    apellido_materno:{
    	type: 'string',
    	size: 25,
    	required:true
    },
    edad:{
    	type: 'integer',
    	required:true
    },
    cursa:{
      model:'carrera' //nombre de la entidad a relacionar
                      //entidad 1
    },
      cursa_materia:{
    collection:'materia',
    via:'matricula'
    }



  }
};







































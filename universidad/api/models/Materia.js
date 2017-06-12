/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
   autoCreatedAt: false,
	autoUpdatedAt: false,
  attributes: {
  	id_materia:{
  	   type: 'integer',
      unique: true,
      primaryKey: true
    },
     nombre:{
    	type: 'string',
    	size: 25,
    	required:true
    },
    matricula:{
    	model:'alumno'
    }

  }
};


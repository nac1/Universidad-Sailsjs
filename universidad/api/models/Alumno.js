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
    },
      password:{
        type:'string',
        required:true
      },
      passwordConfirmation:{
        type:'string',
        required:true
      },
      encryptedPassword:{
        type:'string'
      },
      toJSON:function(){
        var obj=this.toObject();
        delete obj.password;
        delete obj._csrf;
        delete obj.passwordConfirmation;
        return obj;
      }
  },
  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    console.log('entraste a before create');
    var password=values.password;
    var passwordConfirmation=values.passwordConfirmation;
    console.log(password+";"+passwordConfirmation);

    if(!password || !passwordConfirmation || password!=passwordConfirmation)
    {
      var passError=[{ 
        name:'passwordDoesNotMatch',
        message:'Las contraseñas debe Coincidir'
      }]
      return next({
        err:passError
      });

    }

    require('bcrypt').hash(values.password, 10, function passwordEncryted(err,encryptedPassword) 
    {
      if (err) {
        return next(err);
               }
      values.encryptedPassword = encryptedPassword;
      values.password=null;
      values.passwordConfirmation=null;
      next();
    });
  }

};







































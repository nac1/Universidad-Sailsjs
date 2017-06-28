 /**
 * AlumnoController
 *
 * @description :: Server-side logic for managing alumnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 
 new:function(req,res){
    console.log("Entraste a New");
 	res.view();
 },
 create:function(req,res)
 {
 	var alumnObj={
 		matricula:req.param('mat'),
 		nombre:req.param('nombre'),
 		apellido_paterno:req.param('ap'),
 		apellido_materno:req.param('am'),
 		edad:req.param('edad'),
 		cursa:req.param('carrera'),
 		password:req.param('pas'),
 		passwordConfirmation:req.param('cpas')
 				}
    //Alumno es modelo             //alumno registro
 	Alumno.create(alumnObj,function(err,alumno){
 		if(err){
 			//console.log(JSON.stringify(err));
 			req.session.flash={err:err};
 			return res.redirect('alumno/new');
 			   }
 		sails.log('alumno %s%',alumno);

 		res.redirect('alumno/show/?matricula='+alumno.matricula);
 												})
 },
 show:function(req,res,next)
 {
 	console.log("Entraste a show");
 	console.log("matricula"+req.param('matricula'));

 	Alumno.findOne({matricula:req.param('matricula')},
 		function(err,alumno){
 			if(err)
 			{
 				return next(err);
 			}
 			res.view({alumno:alumno});

 		});

 },
 edit:function(req,res,next)
 {
 	console.log("Entraste a edit");
 	console.log("matricula"+req.param('matricula'));

 	Alumno.findOne({matricula:req.param('matricula')},
 		function(err,alumno){
 			if(err)
 			{
 				return next(err);
 			}
 			res.view({alumno:alumno});
 		});
 },
 update:function(req,res,next)
 {
 	var alumnObj={
 		nombre:req.param('nombre'),
 		apellido_paterno:req.param('ap'),
 		apellido_materno:req.param('am'),
 		edad:req.param('edad'),
 		cursa:req.param('carrera')
 				}

 	Alumno.update({matricula:req.param('matricula')},alumnObj,
 		function(err,alumno){
 				if(err)
 				{
 					console.log(err);
 					return res.redirect('/alumno/show/?matricula='
 						+req.param('matricula'));

 				}
 				res.redirect('/alumno/show/?matricula='
 						+req.param('matricula'));

 		         });

 },
 all:function(req,res,next)
 {
 	Alumno.find(function(err,alumnos){
		if(err)
		{
			console.log(err);
			return next(err);
		}
		res.view({alumnos:alumnos});
 									});
 },
 delete:function(req,res,next)
 {
 	Alumno.destroy({matricula:req.param('matricula')},
 		function(err){
 				if(err){
 					console.log(err);
 					return next(err);
 				}
 				res.redirect('/alumno/all');

 					});
 }





	
};

























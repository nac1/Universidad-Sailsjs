/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt=require('bcrypt');
module.exports = {

	new:function(req,res){
      res.view();
	},
	create:function(req,res,next)
	{
		console.log("inicio logeo");
		var username=req.param('ns');
		var password=req.param('pass');

		if(!username || ! password)
		{
			var errorUser=[{message:'Required username and password'}]
			req.session.flash={
				err:errorUser
			}
			return res.redirect('session/new');
		}

		Alumno.findOne({matricula:username},function userfounded(err,user)
			{ if(err)
				{ 
					req.session.flash={ err:err}
					return res.redirect('session/new');

				}

				if(!user){
					var noUserError=[{message:'Not user'}]
					req.session.flash={
						err:noUserError
					}
					return res.redirect('session/new');		
				}

				bcrypt.compare(password,user.encryptedPassword,function passwordMatch(err,valid){
							if(err)
						{ 
							req.session.flash={ err:err}
							return res.redirect('session/new');

						}

						if(!valid){
							var noUserError=[{message:'Not match password'}]
							req.session.flash={
								err:noUserError
											  }
							return res.redirect('session/new');		
								}

						res.redirect('alumno/show/?matricula='+user.matricula);
				});

			});



	}
	
};


/*
This class is used to secure the api by creating JSON Web Token
will be used by the controllers/auth.js to generate the token 
when the user login and authentication
*/ 
module.exports = {
  auth: {
  	// secret to ensure token confidentiality
    secret: 'secret here'
  },
}
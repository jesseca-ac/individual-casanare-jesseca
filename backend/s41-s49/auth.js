// Import JWT
const jwt = require("jsonwebtoken")
// User defined string data that will be used to create our JSON web tokens
// Used in the algorithm for encrypting our data which makes it difficult to decode the information without the defined secret keyword
const secret = "CourseBookingAPI";

// [Section]JSON WEB Tokens
/*
	- JSON Web Token or JWT is a way of securely passing information from the server to the client or to other parts of a server
	- Information is kept secure through the use of secret ocde
	- Only the system that knows the secret code that can decode the encrypted information
*/

// [SECTION] Token Creation
/*
Analogy
	Pack the gift, and provide a lock with the secret code as the key 
*/

module.exports.createAccessToken = (user) => {
	const data = {
		id : user._id,
		email : user.email,
		isAdmin : user.isAdmin
	}

	return jwt.sign(data, secret, {});
}


// [SECTION] Token Verification
/*
Analogy 
	Receive the gift and open the lock to verify if the sender is legitimate and the gift was not tampered with.
-Verify will be used as a middleware in ExpressJS. Functions addes as argument in an expressJS route are considered as middleware and is able to receive the request and response objects as well as the next() function. Middlewares will be further elaborated on later sessions.
*/

module.exports.verify = (req, res, next) => {
	console.log(req.headers.authorization)

	let token = req.headers.authorization

	if(typeof token === "undefined"){
		return res.send({ auth: "Failed. No Token"})
	} else {
		console.log(token);
		token = token.slice(7, token.length)
		console.log(token);

		// [SECTION] Token decryption
		/*
		Analogy 
			Open the gift and get the content 
		-Validate the token using the "verify" method decrypting the token using the secret code.
		- token - the jwt token passed from the request headers.
		-secret - the secret word from our previous discussion which validates our token
		- function (err, decodedToken) - err contains the error in verification, decodedToken contains the decoded data within the token after verification
		"err" is a built-in variable of express to handle errors
		*/
		jwt.verify(token, secret, function(err, decodedToken){
			// If there was an error in verifcation, an erratic token, a wrong secret within the token, we will send a message to the client.
			if (err){
				return res.send({
					auth: "Failed",
					message: err.message
				})
			} else {
				console.log("result from verify method:")
				console.log(decodedToken)

				// Else, if our token is verified to be correct, then we will update the request and add the user's decoded details
				req.user = decodedToken;

				// next() is an expressJS function which allows us to move to the next function in the route. It also passes details of the request and response to the next function/middleware.
				next();
			}
		})
	}
}

module.exports.verifyAdmin = (req, res, next) => {
// Checks if the owner of the token is an admin.
if(req.user.isAdmin){
	// If it is, move to the next middleware/controller using the next() method.
	next();
} else {
	// Else, end the request-response cycle by sending the appropriate response and status code.
	return res.status(403).send({
		auth: "Failed",
		message: "Action Forbidden"
	})
}
	console.log("result from verifyAdmin method");
	console.log(req.user);
}
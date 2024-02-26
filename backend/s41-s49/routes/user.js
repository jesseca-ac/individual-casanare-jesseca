// [SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");

// [SECTION] Routing Component
const router = express.Router();

const {verify} = require("../auth");

// [SECTION] Retrieving User Details
// The "getprofile" controller method is passed as middlware, the controller will have access to the "req" and "res" objects.
// This will also make our code look cleaner and easir to read as our routes no longer deal with logic.
// All business logic will now be handled by the controller
router.get("/details", verify, userController.getProfile);


// [SECTION] Routes - POST
// Route for checking if the user's email already exists in the database
// Invokes the "checkEmailExists" function from the controller file to communicate with our database
// This passes the "body" property of our "request" object to the corresponding controller function

router.post("/checkEmail", userController.checkEmailExists);

router.post("/register", userController.registerUser);



// [SECTION] Route for user authentication
router.post("/login", userController.loginUser);


module.exports = router;
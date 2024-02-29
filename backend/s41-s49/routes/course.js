//[SECTION] Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");
const auth = require("../auth");

//[SECTION] Routing Component
const router = express.Router();

const {verify, verifyAdmin} = auth;
// Deconstruct the "auth" module so that we can simply store "verify" and "verifyAdmin" in their variables and reuse it in our routes.

//[SECTION] Route for creating a course
router.post("/", verify, verifyAdmin, courseController.addCourse); 

// [SECTION] Gett all courses
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

//[SECTION] Route for retrieving all courses
router.get("/", courseController.getAllActive);

// [SECTION] Route for retrieving a specific course
/*
	UPDATED VERSION! :) 
	Now we will retrieve the courses using parameters and the wildcard :)
*/
router.get("/:courseId", courseController.getCourse);

// [SECTION] Route to update a course as an admin
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

//[SECTION] Route to archiving a course (Admin)
router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);

//[SECTION] Route to activating a course (Admin)
router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);


//[SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;
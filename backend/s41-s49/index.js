// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
// Allows our backend app to be available to our frontend app
// Allows us to control the app's Cross Origin Resource Sharing settings
const cors = require("cors");

// Allows access to routes defined within our application
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");

// [SECTION] Environment Setup
const port = 4000;

// [SECTION] Server Setup
// Creates an "app" variable that stores the result of the "express" function that initializes our express application and allows us access to different methods that will make backend creation easy
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Allows all resources to access our backend application
app.use(cors());


// [SECTION] Database connection
// Connect to our MongoDB database
mongoose.connect("mongodb+srv://andreivon:admin1234@cluster0.qwsgp7m.mongodb.net/Batch364-todo?retryWrites=true&w=majority");

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// Groups all routes in userRoutes under "/users" base endpoint
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

// [SECTION] Server Gateway Response
// "process.env.PORT || port" will use the environment variable if it is a available or will use port 4000 if none is defined
// This syntax will allow flexibility when using the application locally or a hosted application

if(require.main === module){
	app.listen(process.env.PORT || port, () => {
		console.log(`API is now online on port ${ process.env.PORT || port } `)
	});
}

// In creating APIs, exporting modules in the "index.js" file is ommited
// Exports an object containing the value of the "app" variable only used for grading.

module.exports = app;
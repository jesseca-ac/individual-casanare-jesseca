const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;


app.listen(port, () => { console.log(`Server is running at PORT ${port}`) })

app.use(express.json()); // allow app to read json
app.use(express.urlencoded({extended:true})); // allow app to read form


mongoose.connect('mongodb+srv://jesseca:admin@cluster0.xa9cx8q.mongodb.net/B364-to-do?retryWrites=true&w=majority'); // add whatever collection name after mongodb.net/


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => console.log('Connected Successfully'));


// Mongoose Schema() determines the structure of documents in the database
const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})


// Models
// uses schemas and are used to create/instatiate objects
const Task = mongoose.model('Task', taskSchema);


// Routes
/* Creating a new task

    Business Logic
    1. Add a functionality to check if there are duplicate tasks
        - If the task already exists in the database, we return an error
        - If the task doesn't exist in the database, we add it in the database
    2. The task data will be coming from the request's body
    3. Create a new Task object with a "name" field/property
    4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/

app.post('/tasks', (request, response) => {
    Task.findOne({name : request.body.name}).then(result => {
        if(result === null){
            let newTask = new Task({
                name: request.body.name
            })

            newTask.save().then(save => response.send('Task Saved'));

        } else {
            return response.send('Task already exists');
        }
    })
})


/* Getting all the tasks

    Business Logic
    1. Retrieve all the documents
    2. If an error is encountered, print the error
    3. If no errors are found, send a success status back to the client/Postman and return an array of documents
*/

app.get('/tasks', (request, response) => {
    Task.find({})
})
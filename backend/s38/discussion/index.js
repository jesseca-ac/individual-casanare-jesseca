// initialize express.js
const express = require('express');
const app = express();


const port = 4000;


// allows the app to read JSON, by default only string or array is available via URL
app.use(express.json());


// extended:true will other data types such as objects
app.use(express.urlencoded({ extended: true }));


// EXPRESS ROUTES
// express have corresponding methods for each HTTP method

app.get('/', (req, res) => {
    res.send('Hello from app.get!');
});


app.get('/hello', (req, res) => {
    res.send('Hello from /hello endpoint!');
});


app.post('/hello', (req, res) => {
    res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
});


let users = []

app.post('/register', (req, res) => {

    if(!req.body.username && !req.body.password) {
        users.push(req.body);
        res.send(`User ${req.body.username} successfully registered!`);

    } else {
        res.send('Please input BOTH username and password');
    }
})


app.put('/change-password', (req, res) => {

    let message;

    for(let i = 0; i < users.length; i++) {

        if(req.body.username == users[i].username) {
            users[i].password = req.body.password

            message = `User ${req.body.username}'s password has been updated.`
            break;

        } else {
            message = 'User does not exist';
        }
    }
})



app.listen(port, () => console.log(`Server running in http://localhost:${port}...`));
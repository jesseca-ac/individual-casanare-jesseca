// REQUIRE
// use the "require" to load modules
// a module is a software component or part of a program

// HTTP MODULE
// http module lets node transfer data using HTTP protocol
// http module is a set of individual files that contains code to create a component that helps establish data transfer between applications

// HTTP CREATE SERVER
// using http's .createServer() method creates an HTTP server that listens to requests on a specified port and gives back responses
// .listen() is where the port number is specified

/*

let http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World');
}).listen(4000);

console.log('Server running at localhost: 4000...');

*/

// BETTER WAY OF DOING THE ABOVE CODE

const http = require('http');
const port = 4000;
const items = ["laptop", "desktop", "tablet"];


const app = http.createServer((request, response) => {
    
    if(request.url == '/greeting') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World');

    } else if (request.url == '/homepage') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('This is the homepage');

    } else if (request.url == '/items' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(items.join('\n'));

    } else if (request.url == '/items' && request.method === 'POST') {
        console.log(request.method)
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('This route will be used to add another item');

    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Page not available');
        
    }

})


app.listen(port);
console.log(`Server is running at localhost: ${port}`);
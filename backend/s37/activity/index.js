
const http = require('http')

const port = 4000

http.createServer((req, res) => {
    
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to Booking System')
        
    } else if (req.url == '/profile') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to your profile!')
        
    } else if (req.url == '/courses') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Here\’s our courses available')
        
    } else if (req.url == '/addCourse' && req.method === 'POST') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Add a course to our resources')
        
    } else if (req.url == '/updateCourse' && req.method === 'PUT') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Update a course to our resources')
        
    } else if (req.url == '/deleteCourse' && req.method === 'DELETE') {
        resHandler(res, 'Delete courses to our resources')
        
    }
    
    
    
}).listen(port)

console.log(`Server is running in PORT ${port}`)


// Experiment, reusable response handler
const resHandler = function(res, message) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(message)
}

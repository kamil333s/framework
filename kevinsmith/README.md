This is a simple RESTful router for GET, POST, PUT, and DELETE.

###***Basic Usage***

## REQUIRED STUFF
var http = require('http');
var Router = require('./router');
var theRouter = new Router();

## FUNCTIONS YOU CAN USE

#Makes a GET request to the serverDirectory and runs the given function
theRouter.get(serverDirectory, function); 

#Makes a POST request to the serverDirectory and runs the given function
theRouter.post(serverDirectory, function);

#Makes a PUT request to the serverDirectory and runs the given function
theRouter.put(serverDirectory, function);

#Makes a DELETE request to the serverDirectory and runs the given function
theRouter.delete(serverDirectory, function);




##The following is provided if you do not have a script to start a server and do 
##basic server interaction.

###***EXAMPLE SCRIPT***
```
'use strict';

var http = require('http');
var Router = require('./router');
var theRouter = new Router();

theRouter.get('/', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('Get says Hello from the main route!');
  console.log('Get!');
  res.end();
});
theRouter.post('/', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('Post says Hello from the main route!');
  console.log('Post!');
  res.end();
});
theRouter.put('/', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('Put says Hello from the main route!');
  console.log('Put!');
  res.end();
});
theRouter.delete('/', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('Delete says Hello from the main route!');
  console.log('Delete!');
  res.end();
});



http.createServer(theRouter.route()).listen(3000, () =>{
  console.log('Server started on 3000');
}); 
```
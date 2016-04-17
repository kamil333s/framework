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
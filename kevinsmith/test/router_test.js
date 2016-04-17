'use strict';

var expect =  require('chai').expect;
var chai =  require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

require(__dirname + '/../server.js');

describe('testing functions in router.js', function(){
  it('Should return "Get says Hello from the main route!" on a GET request', function(done){
    chai.request('http://localhost:3000')
                .get('/')
                .end((err, res) => {
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  expect(res).to.have.header('content-type','text/html');
                  expect(res.text).to.equal('Get says Hello from the main route!');
                  done(); 
                });
  });

  it('Should return "Put says Hello from the main route!" on a PUT request', function(done){
    chai.request('http://localhost:3000')
                .put('/')
                .end((err, res) => {
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  expect(res).to.have.header('content-type','text/html');
                  expect(res.text).to.equal('Put says Hello from the main route!');
                  done(); 
                });
  });


  it('Should return "Delete says Hello from the main route!" on a DELETE request', function(done){
    chai.request('http://localhost:3000')
                .delete('/')
                .end((err, res) => {
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  expect(res).to.have.header('content-type','text/html');
                  expect(res.text).to.equal('Delete says Hello from the main route!');
                  done(); 
                });
  });

  it('Should return "Post says Hello from the main route!" on a POST request', function(done){
    chai.request('http://localhost:3000')
                .post('/')
                .end((err, res) => {
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  expect(res).to.have.header('content-type','text/html');
                  expect(res.text).to.equal('Post says Hello from the main route!');
                  done(); 
                });
  });
});
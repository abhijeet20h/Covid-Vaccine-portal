const server = require('../server.js')
const users = require('../models/usersModel')
const db = require("../models");
const chaiHttp = require('chai-http')
const chai = require('chai')
let should = chai.should();
const userDataa = db.userdata;

chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     userDataa.remove({}, (err) => { 
    //        done();           
    //     });        
    // });
/*
  * Test the /GET route
  */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/displayData')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  /*
  * Test the /POST route
  */
  describe('/POST users', () => {
    it('it should not POST a user', (done) => {
        let user = {
            name: "The Lord of the Rings",
            age: 22,
            address: "1954"
        }
      chai.request(server)
          .post('/addusers')
          .send(user)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                // res.body.should.have.property('errors');
                // res.body.errors.should.have.property('pages');
                // res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });

});

});


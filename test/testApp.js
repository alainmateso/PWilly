import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../node/';
import data from '../node/models'

chai.use(chaiHttp)
const should = chai.should()
const expect = chai.expect

describe('Test Server', () => {
  describe('Test GET items route', () => {
    it('It should GET all items', (done) => {
      chai.request(app)
        .get('/api/v1/items')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.eql(data);
          done();
        });
    });
  });

  describe('Test GET item by ID', () => {
    it('It should return one item corresponding to the id in params', (done) => {
      chai.request(app)
        .get('/api/v1/items/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.be.eql(data[0]);
          done();
        })
    });
  });

  const newItem = { id: 1, name: "Object1", size: "1", location: "kacyiru" }
  describe('Test POST item route', () => {
    it('It should post a new item in the array', (done) => {
      chai.request(app)
        .post('/api/v1/item')
        .send(newItem)
        .end((err, res) => {
          expect(res.body).to.have.status(201);
          expect(res.body).to.be.a('object');
          res.body.should.have.property('status').eql(201);
          res.body.should.have.property('message').eql('created');
          res.body.should.have.property('data').eql(newItem);
          done();
        });
    });
  });

});

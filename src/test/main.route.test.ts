import app from '../main/app/main.app';
import * as chai from 'chai';

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let api = app.expressApp;
let should = chai.should();

describe('requests on basepath - /api/v1/', () => {
  it('should return proper header on GET', () => {
    return chai.request(api)
      .get('/api/v1/').then((res) => {
        res.should.have.status(200);
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return proper header on POST', () => {
    return chai.request(api)
      .get('/api/v1').then((res) => {
        res.should.have.status(200);
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return proper header on PUT', () => {
    return chai.request(api)
      .get('/api/v1').then((res) => {
        res.should.have.status(200);
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });
});
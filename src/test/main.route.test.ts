import app from '../main/app/main.app';
import * as chai from 'chai';

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let api = app.expressApp;
let should = chai.should();

describe('requests on basepath - /api/v1', () => {

  /**
   * GET
   */
  it('should return proper header on GET', () => {
    return chai.request(api)
      .get('/api/v1')
      .then((res) => {
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return status code 200 on GET', () => {
    return chai.request(api)
      .get('/api/v1')
      .then((res) => {
        res.should.have.status(200);
      });
  });

  /**
   * POST
   */
  it('should return proper header on POST', () => {
    return chai.request(api)
      .post('/api/v1')
      .then((res) => {
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return status code 200 on POST', () => {
    return chai.request(api)
      .post('/api/v1')
      .then((res) => {
        res.should.have.status(200);
      });
  });

  /**
   * PUT
   */
  it('should return status code 404 on PUT', () => {
    return chai.request(api)
      .put('/api/v1')
      .then((res) => {
      }).catch((err) => {
        err.should.have.status(404);
      });
  });

  /**
   * DELETE
   */
  it('should return status code 404 on DELETE', () => {
    return chai.request(api)
      .del('/api/v1')
      .then((res) => {
      }).catch((err) => {
        err.should.have.status(404);
      });
  });

});
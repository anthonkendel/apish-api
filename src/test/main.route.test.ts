import app from '../main/apps/main.app';
import * as chai from 'chai';

let chaiHttp: any = require('chai-http');
chai.use(chaiHttp);

let api: any = app.expressApp;
let should: any = chai.should();

describe('requests on base router - /api/v1', () => {

  /**
   * GET
   */
  it('should return proper header on GET - /', () => {
    return chai.request(api)
      .get('/api/v1/')
      .then((res) => {
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return status code ::400:: on GET - /', () => {
    return chai.request(api)
      .get('/api/v1/')
      .then((res) => {
      }, (res) => {
        res.should.have.status(400);
      });
  });

  /**
   * POST
   */
  it('should return proper header on POST - /', () => {
    return chai.request(api)
      .post('/api/v1/')
      .then((res) => {
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return status code ::400:: on POST - /', () => {
    return chai.request(api)
      .post('/api/v1/')
      .then((res) => {
      }, (res) => {
        res.should.have.status(400);
      });
  });

  /**
   * PUT
   */
  it('should return proper header on PUT - /', () => {
    return chai.request(api)
      .put('/api/v1/')
      .then((res) => {
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return status code ::400:: on PUT - /', () => {
    return chai.request(api)
      .put('/api/v1/')
      .then((res) => {
      }, (res) => {
        res.should.have.status(400);
      });
  });

  /**
   * DELETE
   */
  it('should return proper header on DELETE - /', () => {
    return chai.request(api)
      .del('/api/v1/')
      .then((res) => {
        res.should.have.header('Content-Type', 'application/json; charset=utf-8');
        res.should.have.header('Access-Control-Allow-Origin', '*');
        res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
        res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      });
  });

  it('should return status code ::400:: on DELETE - /', () => {
    return chai.request(api)
      .del('/api/v1/')
      .then((res) => {
      }, (res) => {
        res.should.have.status(400);
      });
  });
});
import app from '../main/apps/main.app';
import * as chai from 'chai';

let chaiHttp: any = require('chai-http');
chai.use(chaiHttp);

let api: any = app.expressApp;
let should: any = chai.should();

describe('requests on date router - /api/v1/dates', () => {
  /**
   * GET
   */
  it('should return proper format on GET - /', () => {
    return chai.request(api)
      .get('/api/v1/dates')
      .then((res) => {
        res.body.should.have.property('uuid');
        res.body.should.have.property('date');
      });
  });

  it('should return status code ::200:: on GET - /', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.should.have.status(200);
      });
  });

  /**
   * POST
   */
  let body = {
    'year': 2000,
    'month': 10,
    'day': 1
  };

  it('should return proper format on POST - /', () => {
    return chai.request(api)
      .post('/api/v1/dates/')
      .send(body)
      .then((res) => {
        res.body.should.have.property('uuid');
        res.body.should.have.property('date');
      });
  });

  it('should return status code ::200:: on POST - /', () => {
    return chai.request(api)
      .post('/api/v1/dates/')
      .send(body)
      .then((res) => {
        res.should.have.status(200);
      });
  });

  let faultyBody = {
    'year': '20--',
    'month': 10,
    'day': 1
  };

  it('should return proper format on faulty POST - /', () => {
    return chai.request(api)
      .post('/api/v1/dates/')
      .send(faultyBody)
      .then((res) => {
      }, (res) => {
        res.should.have.property('message');
      });
  });

  it('should return status code ::400:: on faulty POST - /', () => {
    return chai.request(api)
      .post('/api/v1/dates/')
      .send(body)
      .send(faultyBody)
      .then((res) => {
      }, (res) => {
        res.should.have.status(400);
      });
  });
});
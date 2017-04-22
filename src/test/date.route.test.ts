import app from '../main/apps/main.app';
import * as chai from 'chai';

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let api = app.expressApp;
let should = chai.should();

describe('requests on date router - /api/v1/dates', () => {

  /**
   * GET
   */
  it('should return proper format on GET - /', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should return proper format on GET - /?type=past', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should return proper format on GET - /?type=future', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should return proper format on GET - /?type=recent', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should return status code ::200:: on GET - /', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should status code ::200:: on GET - /?type=past', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should returnstatus code ::200:: on GET - /?type=future', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });

  it('should return status code ::200:: on GET - /?type=recent', () => {
    return chai.request(api)
      .get('/api/v1/dates/')
      .then((res) => {
        res.body.should.have.property('date');
      });
  });
});
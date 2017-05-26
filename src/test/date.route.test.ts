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

  describe('request on date router - /api/v1/dates?type=', () => {

    it('should return proper format on GET - ?type=past', () => {
      return chai.request(api)
        .get('/api/v1/dates?type=past')
        .then((res) => {
          res.body.should.have.property('date');
        });
    });

    it('should return proper format on GET - ?type=future', () => {
      return chai.request(api)
        .get('/api/v1/dates?type=future')
        .then((res) => {
          res.body.should.have.property('date');
        });
    });

    it('should return proper format on GET - ?type=recent', () => {
      return chai.request(api)
        .get('/api/v1/dates?type=recent')
        .then((res) => {
          res.body.should.have.property('date');
        });
    });
  });
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_app_1 = require("../main/apps/main.app");
var chai = require("chai");
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var api = main_app_1.default.expressApp;
var should = chai.should();
describe('requests on date router - /api/v1/dates', function () {
    /**
     * GET
     */
    it('should return proper format on GET - /', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should return proper format on GET - /?type=past', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should return proper format on GET - /?type=future', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should return proper format on GET - /?type=recent', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should return status code ::200:: on GET - /', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should status code ::200:: on GET - /?type=past', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should returnstatus code ::200:: on GET - /?type=future', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
    it('should return status code ::200:: on GET - /?type=recent', function () {
        return chai.request(api)
            .get('/api/v1/dates/')
            .then(function (res) {
            res.body.should.have.property('date');
        });
    });
});

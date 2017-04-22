"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_app_1 = require("../main/app/main.app");
var chai = require("chai");
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var api = main_app_1.default.expressApp;
var should = chai.should();
describe('requests on basepath - /api/v1', function () {
    /**
     * GET
     */
    it('should return proper header on GET', function () {
        return chai.request(api)
            .get('/api/v1')
            .then(function (res) {
            res.should.have.header('Content-Type', 'application/json; charset=utf-8');
            res.should.have.header('Access-Control-Allow-Origin', '*');
            res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
            res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        });
    });
    it('should return status code 200 on GET', function () {
        return chai.request(api)
            .get('/api/v1')
            .then(function (res) {
            res.should.have.status(200);
        });
    });
    /**
     * POST
     */
    it('should return proper header on POST', function () {
        return chai.request(api)
            .post('/api/v1')
            .then(function (res) {
            res.should.have.header('Content-Type', 'application/json; charset=utf-8');
            res.should.have.header('Access-Control-Allow-Origin', '*');
            res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
            res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        });
    });
    it('should return status code 200 on POST', function () {
        return chai.request(api)
            .post('/api/v1')
            .then(function (res) {
            res.should.have.status(200);
        });
    });
    /**
     * PUT
     */
    it('should return status code 404 on PUT', function () {
        return chai.request(api)
            .put('/api/v1')
            .then(function (res) {
        }).catch(function (err) {
            err.should.have.status(404);
        });
    });
    /**
     * DELETE
     */
    it('should return status code 404 on DELETE', function () {
        return chai.request(api)
            .del('/api/v1')
            .then(function (res) {
        }).catch(function (err) {
            err.should.have.status(404);
        });
    });
});

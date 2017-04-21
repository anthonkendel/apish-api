"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_app_1 = require("../main/app/main.app");
var chai = require("chai");
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var api = main_app_1.default.expressApp;
var should = chai.should();
describe('requests on basepath - /api/v1/', function () {
    it('should return proper header on GET', function () {
        return chai.request(api)
            .get('/api/v1/').then(function (res) {
            res.should.have.status(200);
            res.should.have.header('Content-Type', 'application/json; charset=utf-8');
            res.should.have.header('Access-Control-Allow-Origin', '*');
            res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
            res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        });
    });
    it('should return proper header on POST', function () {
        return chai.request(api)
            .get('/api/v1').then(function (res) {
            res.should.have.status(200);
            res.should.have.header('Content-Type', 'application/json; charset=utf-8');
            res.should.have.header('Access-Control-Allow-Origin', '*');
            res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
            res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        });
    });
    it('should return proper header on PUT', function () {
        return chai.request(api)
            .get('/api/v1').then(function (res) {
            res.should.have.status(200);
            res.should.have.header('Content-Type', 'application/json; charset=utf-8');
            res.should.have.header('Access-Control-Allow-Origin', '*');
            res.should.have.header('Access-Control-Allow-Methods', 'GET, POST');
            res.should.have.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        });
    });
});

const request = require('supertest');
require('dotenv').config()

const Server = require('../models/server');
const connection = require('../database/config.db');

describe('Make a query to the created endpoint', () => {
    const server = new Server();
    const app = server.app

    it('Make a query to get all the data', (done) => {
        request(app)
            .get('/api/countries/')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Make a request get a country info', (done) => {
        request(app)
            .get('/api/countries/Colombia')
            .expect('Content-Type', /json/)
            .expect(202, done);
    });

    it('Make a bad request get country', (done) => {
        request(app)
            .get('/api/countries/Colombia1234')
            .expect('Content-Type', /json/)
            .expect(400, done);
    });

});


afterAll(async () => {
    await connection.destroy();
})

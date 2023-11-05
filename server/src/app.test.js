const app = require('./app');
const request = require('supertest');

describe('API', function() {
    it('respond with json for /planets', function(done) {
        request(app)
        .get('/planets')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('respond with json for /launches', function(done) {
        request(app)
        .get('/launches')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('should add a new launch', function(done) {
        request(app)
        .post('/launches')
        .send({
            mission: 'Hello New Launch',
            rocket: 'Explorer IS1',
            launchDate: '2023-11-05',
            destination: 'Kepler-1652 b'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });

    it('should return an error if missing required launch property', function(done) {
        const invalidLaunch = {
            rocket: 'Rocket 2',
            launchDate: 'November 22, 2030',
            target: 'Target 2',
        };
        request(app)
        .post('/launches')
        .send({
            rocket: 'Explorer IS1',
            launchDate: 'December 27, 2030',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, done);
    });   
});
    
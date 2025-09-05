const app = require('./index.js');
const request = require('supertest');

describe('GET /', () => {
    it('Should return Hello, World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, World!');
    })
})
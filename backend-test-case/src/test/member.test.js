const request = require('supertest');
const app = require('../server'); // Import the app directly without mocking

describe('Members API', () => {
  it('should return a list of all members', async () => {
    const res = await request(app).get('/api/v1/member').send();
    expect(res.statusCode).toEqual(200);
  });
});

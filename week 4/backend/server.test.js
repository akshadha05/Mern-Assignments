const request = require('supertest');
const app = require('./index'); // Import the Express app

describe('API Tests', () => {
  it('GET /welcome', async () => {
    const res = await request(app).get('/welcome');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Welcome to Express!' });
  });

  it('POST /users', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toEqual('John Doe');
    expect(res.body.email).toEqual('john@example.com');
  });

  it('GET /users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('PUT /users/:id', async () => {
    // First, create a user
    const createRes = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com' });
    const userId = createRes.body.id;

    // Then, update the user
    const updateRes = await request(app)
      .put(`/users/${userId}`)
      .send({ name: 'Jane Doe', email: 'jane@example.com' });
    expect(updateRes.statusCode).toEqual(200);
    expect(updateRes.body.name).toEqual('Jane Doe');
    expect(updateRes.body.email).toEqual('jane@example.com');
  });

  it('DELETE /users/:id', async () => {
    // First, create a user
    const createRes = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com' });
    const userId = createRes.body.id;

    // Then, delete the user
    const deleteRes = await request(app).delete(`/users/${userId}`);
    expect(deleteRes.statusCode).toEqual(204);

    // Verify the user is deleted
    const getRes = await request(app).get('/users');
    expect(getRes.body.some((user) => user.id === userId)).toBeFalsy();
  });
});
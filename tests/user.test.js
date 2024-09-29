const request = require('supertest');
const app = require('../app');

describe('Pruebas de creación de usuario', () => {
  it('Debe crear un usuario con éxito', async () => {
    const res = await request(app).post('/users/create').send({
      nombre: 'Lucas',
      email: 'lucasmartin@gmail.com',
      contraseña: '123456',
      rol: 'admin'
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });
});

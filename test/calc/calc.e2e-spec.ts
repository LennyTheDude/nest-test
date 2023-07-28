import request from 'supertest';
import { APP_URL, ADMIN_EMAIL, ADMIN_PASSWORD } from '../utils/constants';

describe('Foo Calc (e2e)', () => {
  const app = APP_URL;
  let apiToken: string;

  it('Should return an unauthorized error: /api/v1/foo/calc/add (GET)', () => {
    return request(app)
      .get('/api/v1/foo/calc/add')
      .query({ num1: 20, num2: 10 })
      .expect(401);
  });

  it('Should return a correct addition result after login: /api/v1/foo/calc/add (GET)', async () => {
    await request(app)
      .post('/api/v1/auth/admin/email/login')
      .send({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
      .then(({ body }) => {
        apiToken = body.token;
      });

    return request(app)
      .get('/api/v1/foo/calc/add')
      .auth(apiToken, {
        type: 'bearer',
      })
      .query({ num1: 20, num2: 12 })
      .expect(200)
      .expect({ result: 32 });
  });

  it('Should return a correct subtraction result: /api/v1/foo/calc/subtract (GET)', () => {
    return request(app)
      .get('/api/v1/foo/calc/subtract')
      .query({ num1: 20, num2: 10 })
      .expect(200)
      .expect({ result: 10 });
  });

  it('Should return an error message: /api/v1/foo/calc/subtract (GET)', () => {
    return request(app)
      .get('/api/v1/foo/calc/subtract')
      .query({ num1: 20 })
      .expect(200)
      .expect({ error: 'Please provide 2 numbers to subtract!' });
  });

  it('Should return a correct multiplication result: /api/v1/foo/calc/multiply (GET)', () => {
    return request(app)
      .get('/api/v1/foo/calc/multiply')
      .query({ num1: 4, num2: 5 })
      .expect(200)
      .expect({ result: 20 });
  });

  it('Should return a correct division result: /api/v1/foo/calc/divide (GET)', () => {
    return request(app)
      .get('/api/v1/foo/calc/divide')
      .query({ num1: 45, num2: 5 })
      .expect(200)
      .expect({ result: 9 });
  });
});

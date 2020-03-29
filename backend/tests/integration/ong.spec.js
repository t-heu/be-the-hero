const request = require('supertest')

const app = require('../../src/app')
const connection = require('../../src/database/connection')

// test integrstion vai chamar so arquivo app.js
describe('ONG', () => {
  // antes de cada test execute.
  beforeEach(async () => {
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.rollback()
    await connection.destroy()
  })

  it('should be able to create', async () => {
    const response = await request(app).post('/ongs').send({
      name: "ohssho",
      email: "oggao@gmail.com",
      whatsapp: "123456890",
      uf: "BA",
      city: "FSA"
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body).toHaveLength(8)
  })
})

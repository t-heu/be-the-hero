const crypto = require('crypto')

const generateUniqueId = require('../../utils/generateUniqueId')
const connection = require('../../database/connection')

class OngController {
  async index(request, response) {
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
  }

  async store(request, response) {
    const { name, email, uf, city, whatsapp } = request.body

    const id = generateUniqueId()

    const ob = await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      uf,
      city
    })
    
    return response.json({ id })
  }
}

module.exports = new OngController()

const jwt = require('jsonwebtoken')

const authConfig = require('../../config/auth')
const connection = require('../../database/connection')

class SessionController {
  async store(request, response) {
    const { id } = request.body

    const ong = await connection('ongs').where('id', id).select('name').first().returning('*')

    if(!ong) {
      return response.status(401).json({ error: "No ONG found with this ID"})
    }
    
    return response.json({
      ong,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

module.exports = new SessionController()

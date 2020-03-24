const connection = require('../../database/connection')

class ProfileController {
  async index(request, response) {
    const ong_id = request.headers.authorization

    const incidents = await connection('incidents').where('ong_id', ong_id).select('*').returning('*')

    return response.json(incidents)
  }
}

module.exports = new ProfileController()

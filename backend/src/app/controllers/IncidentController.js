const connection = require('../../database/connection')

class IncidentController {
  async index(request, response) {
    const { page = 1 } = request.query
    
    const [count] = await connection('incidents').count().returning('*')

    response.header('X-Total-Count', count['count'])

    const ongs = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

    return response.json(ongs)
  }

  async store(request, response) {
    const { title, description, value } = request.body
    
    const ong_id = request.headers.authorization
    
    const [data] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    }).returning('*')
    
    const { id } = data
    
    return response.json({ id })
  }
  
  async delete(request, response) {
    const { id } = request.params
    const ong_id = request.headers.authorization
    
    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()
      .returning('*')

    if(incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not permitted" })
    }

    await connection('incidents').where('id', id).delete()

    return response.status(204).send()
  }
}

module.exports = new IncidentController()

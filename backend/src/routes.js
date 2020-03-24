const { Router } = require('express')

const IncidentController = require('./app/controllers/IncidentController')
const OngController = require('./app/controllers/OngController')
const ProfileController = require('./app/controllers/ProfileController')
const SessionController = require('./app/controllers/SessionController')


const routes = Router()

routes.post('/session', SessionController.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes

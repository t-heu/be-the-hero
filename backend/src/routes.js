const { Router } = require('express')

const IncidentController = require('./app/controllers/IncidentController')
const OngController = require('./app/controllers/OngController')
const ProfileController = require('./app/controllers/ProfileController')
const SessionController = require('./app/controllers/SessionController')

const AuthMiddleware = require('./app/middlewares/auth')

const routes = Router()

routes.post('/sessions', SessionController.store)

routes.get('/incidents', IncidentController.index)

routes.use(AuthMiddleware)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes

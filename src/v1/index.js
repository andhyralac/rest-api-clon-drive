import { Router } from 'express'
const routes = Router()


import routesUser from './routes/user.routes.js'



routes.use('/v1/users', routesUser)


export default routes
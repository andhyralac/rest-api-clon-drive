import express from 'express'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'


import { environmentVariable } from './config/environment.variable.js'
import { connectDB } from './config/connection.js'
import routesApi from './v1/index.js' 

// App
const app = express()

// Setting
app.set('port', environmentVariable.PORT || 3001)


//Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
if (environmentVariable.AMBIENT === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true
}))

// Setting Routes
app.use('/api/', routesApi)


// Setting Database
connectDB()


export default app

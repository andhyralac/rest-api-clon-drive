import { connect } from 'mongoose'
import { environmentVariable } from '../config/environment.variable.js'

export const connectDB = () => {
    try {
        connect(environmentVariable.MONGO_URI)
        console.log('**** SUCCESSFUL CONNECTION ****')
    } catch ( error ) {
        console.log(`*** CONNECTION ERROR ***`, error)
    }
}
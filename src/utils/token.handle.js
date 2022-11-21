import jwt from 'jsonwebtoken'
import { environmentVariable } from '../config/environment.variable.js'


const tokenSing = (idUser) => {
    const payload = {
        id: idUser,
    }

    return jwt.sign(payload, environmentVariable.JWT_SECRET, {
        expiresIn: '4h'
    })
}


const verifyToken = async (token) => {
    try {
        return jwt.verify(token, environmentVariable.JWT_SECRET)
    } catch ( error ) {
        console.log(error)
    }
}


export default {
    tokenSing,
    verifyToken
}
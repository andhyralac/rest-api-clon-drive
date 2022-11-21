import { UserModel } from '../models/user.model.js'
import tokenHandle from '../utils/token.handle.js'
import passwordHandle from '../utils/password.handle.js'

const createUser = async (user) => {
    try {
        user.password = passwordHandle.encrypt(user.password)
        const userCreated = await UserModel.create(user)
        const token = tokenHandle.tokenSing(userCreated._id)

        return token
    } catch ( error ) {
        console.log(error)
    }
}



export default {
    create: createUser
}
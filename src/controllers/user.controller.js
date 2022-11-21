import userService from '../services/user.service.js'
import httpResponse from '../utils/response.handle.js'

const userCreateHandler = async (req, res) => {
    try {
        const { body } = req
        const token = await userService.create(body)
        return httpResponse.Created(res, { token: token })
    } catch ( error ) {

    }
}





export default {
    userCreateHandler
}
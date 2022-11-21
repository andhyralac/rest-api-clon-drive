import bcryptjs from 'bcryptjs'




const encrypt = (text) => {
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(text, salt)
}


const compare = (passwordPlain, hashPassword) => {
    return bcryptjs.compareSync(passwordPlain, hashPassword)
}



export default {
    encrypt,
    compare
}
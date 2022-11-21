import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    names: {
        type: String,
        required: [true, 'names is required']
    },
    lastnames: {
        type: String,
        required: [true, 'lastnames is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    avatar: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export const UserModel = model('User', userSchema)

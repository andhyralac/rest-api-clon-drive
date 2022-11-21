import { Schema, Types, model } from 'mongoose'

const folderSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name folder is required']
    },
    user: {
        type: Type.ObjectId,
        ref: 'User'
    },
    key_folder: {
        type: String,
        default: ''
    },
    files: [{
            file: String,
            date: { type: Date, default: Date.now }
    }],
    poeple_access: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})

export const FolderModel = model('Folder', folderSchema)
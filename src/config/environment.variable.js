import { config } from 'dotenv'
config()

export const environmentVariable =  {
    PORT: process.env.PORT,
    AMBIENT: process.env.AMBIENT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}
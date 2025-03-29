import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import connectToDb from './db/connectToDb.js'
import messagesRouter from './routes/messages.routes.js'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRouter)
app.use('/api/messages',messagesRouter)
app.use('/api/users',userRouter)

app.listen(PORT,()=>{
    connectToDb()
    console.log(`server running on port ${PORT}`)
})
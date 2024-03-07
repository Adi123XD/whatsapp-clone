// package imports 
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// file imports
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectToDb from './db/connectToDb.js';

const app = express();
dotenv.config();
const port = process.env.PORT

app.use(express.json()) // to parse the incoming requests with json payloads
app.use(cookieParser()) // to parse the incoming cookies from req.cookies
app.get('/',(req ,res)=>{
    res.json({message:"Welcome to whatsapp backend "})
})
app.use('/api/auth',authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
app.listen(port, ()=>{
    connectToDb()
    console.log(`Server is listening on port http://localhost:${port}`)
})

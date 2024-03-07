// package imports 
import express from 'express'
import dotenv from 'dotenv'

// file imports
import authRoutes from './routes/authRoutes.js'
import connectToDb from './db/connectToDb.js';

const app = express();
dotenv.config();
const port = process.env.PORT

app.use(express.json()) // to parse the incoming requests with json payloads
app.get('/',(req ,res)=>{
    res.json({message:"Welcome to whatsapp backend "})
})
app.use('/api/auth',authRoutes)
app.listen(port, ()=>{
    connectToDb()
    console.log(`Server is listening on port http://localhost:${port}`)
})

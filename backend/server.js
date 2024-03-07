import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import connectToDb from './db/connectToDb.js';
const app = express();
dotenv.config();
const port = process.env.PORT
console.log(port)
app.get('/',(req ,res)=>{
    res.json({message:"Welcome to whatsapp backend "})
})
app.use('/api/auth',authRoutes)
app.listen(port, ()=>{
    connectToDb()
    console.log(`Server is listening on port http://localhost:${port}`)
})

import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { taskRouter } from './routes/taskRoutes.js'
const app = express()


app.use(cors())
app.use(express.json())
app.use('/tasks', taskRouter)
const {MONGO_URL} = process.env

mongoose.connect(MONGO_URL)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
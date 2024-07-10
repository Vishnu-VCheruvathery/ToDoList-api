import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { taskRouter } from './routes/taskRoutes.js'
const app = express()
const {MONGO_PASSWORD} = process.env

const connectionString = `mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.rhqvh03.mongodb.net/ToDoList?retryWrites=true&w=majority`

app.use(cors())
app.use(express.json())
app.use('/tasks', taskRouter)


mongoose.connect(connectionString)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
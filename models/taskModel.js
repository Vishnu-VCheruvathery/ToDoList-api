import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: String,
    todo: String,
    completed: Boolean
})


export const taskModel = mongoose.model('task', taskSchema)
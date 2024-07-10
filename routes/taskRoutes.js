import express from 'express'
import { taskModel } from '../models/taskModel.js'

const router = express.Router()

router.get('/', async(req,res) => {
    try {
        const tasks = await taskModel.find({})
        res.json(tasks)
    } catch (error) {
        console.log(error)
        res.json(error)
    }   
})

router.post('/add', async(req,res) => {
    try {
        const {name, task} = req.body
        console.log(req.body)
        
        const newTask = new taskModel({
            name: name,
            todo: task,
            completed: false
        })

        await newTask.save()

        res.json({message: 'Task added successfully'})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.put('/edit/:id', async(req,res) => {
    try {
        const {id} = req.params
        const {name, task} = req.body
        console.log(req.params)
        console.log(req.body)
        const updateTask = await taskModel.findByIdAndUpdate(id, {
            name: name,
            todo: task
        })

        res.json({message: 'Task updated successfully'})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.delete('/delete/:id', async(req,res) => {
    try {
        const {id} = req.params
        console.log(id)
        const deleteTask = await taskModel.findByIdAndDelete(id)

        res.json({message: "Task deleted successfully"})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.post('/completed/:id', async(req,res) => {
    try {
        const {id} = req.params
        const {complete} = req.body
        console.log(req.params)
        console.log(req.body)
        const completedTask = await taskModel.findByIdAndUpdate(id, {
            completed: complete
        })

        res.json({message: 'Task is completed'})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

export {router as taskRouter}
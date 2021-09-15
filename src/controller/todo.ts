import {Request, Response, NextFunction, Router} from 'express';
import { todoModel } from '../model/todomodel'


const createTodo = async (req: Request, res: Response) => {
    const {title} = req.body
    const todo = await todoModel.create({title});
    // res.status(201).json({
    //     data: todo,
    //     message: 'Task is created successfully'
    // })
    res.redirect('/')
}


const updateTodo = async (req: Request, res: Response) => {
    const {title} = req.body
    const existTask = await todoModel.findOne({ _id : req.params.id})
    if(existTask){
        existTask.title = title;
        const updatedTask = await existTask.save();
        // res.status(200).json({
        //     data: updatedTask,
        //     message: 'Task is updated successfully'
        // })
        res.redirect('/')
    }else{
        res.status(401).json({
            message: 'Task is Not Found'
        })
    }
   
}



const deleteTodo= async (req: Request, res: Response) => {
    const existTask = await todoModel.findOne({ _id : req.params.id})
    if(existTask){
        await existTask.remove();
        // res.status(200).json({
        //     data: existTask,
        //     message: 'Task is deleted successfully'
        // })
        res.redirect('/')
    }else{
        res.status(401).json({
            message: 'Task is Not Found'
        })
    }
   
}



const getSingleTodo = async (req: Request, res: Response) => {
    const allTasks = await todoModel.find({})
    const existTask = await todoModel.findOne({ _id : req.params.id})
    if(existTask){
        // res.status(200).json({
        //     data:existTask,
        //     message: 'Task is fetched successfully'
        // })
        res.render("index2", {allTasks : allTasks, existTask: existTask});
    }else{
        res.status(401).json({
            message: 'Task is Not Found'
        })
    }
   
}



const getAllTodos = async (req: Request, res: Response) => {
    const allTasks = await todoModel.find({})
    if(allTasks){
        // res.status(200).json({
        //     data:allTasks,
        //     message: 'All Tasks are gotten successfully'
        // })

        res.render("index2", {allTasks : allTasks});
    }else{
        res.status(401).json({
            message: 'Tasks are Not Found'
        })
    }
   
}

export {
    getAllTodos,
    getSingleTodo,
    createTodo,
    updateTodo,
    deleteTodo
}
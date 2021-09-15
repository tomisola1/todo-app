"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getSingleTodo = exports.getAllTodos = void 0;
const todomodel_1 = require("../model/todomodel");
const createTodo = async (req, res) => {
    const { title } = req.body;
    const todo = await todomodel_1.todoModel.create({ title });
    // res.status(201).json({
    //     data: todo,
    //     message: 'Task is created successfully'
    // })
    res.redirect('/');
};
exports.createTodo = createTodo;
const updateTodo = async (req, res) => {
    const { title } = req.body;
    const existTask = await todomodel_1.todoModel.findOne({ _id: req.params.id });
    if (existTask) {
        existTask.title = title;
        const updatedTask = await existTask.save();
        // res.status(200).json({
        //     data: updatedTask,
        //     message: 'Task is updated successfully'
        // })
        res.redirect('/');
    }
    else {
        res.status(401).json({
            message: 'Task is Not Found'
        });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    const existTask = await todomodel_1.todoModel.findOne({ _id: req.params.id });
    if (existTask) {
        await existTask.remove();
        // res.status(200).json({
        //     data: existTask,
        //     message: 'Task is deleted successfully'
        // })
        res.redirect('/');
    }
    else {
        res.status(401).json({
            message: 'Task is Not Found'
        });
    }
};
exports.deleteTodo = deleteTodo;
const getSingleTodo = async (req, res) => {
    const allTasks = await todomodel_1.todoModel.find({});
    const existTask = await todomodel_1.todoModel.findOne({ _id: req.params.id });
    if (existTask) {
        // res.status(200).json({
        //     data:existTask,
        //     message: 'Task is fetched successfully'
        // })
        res.render("index2", { allTasks: allTasks, existTask: existTask });
    }
    else {
        res.status(401).json({
            message: 'Task is Not Found'
        });
    }
};
exports.getSingleTodo = getSingleTodo;
const getAllTodos = async (req, res) => {
    const allTasks = await todomodel_1.todoModel.find({});
    if (allTasks) {
        // res.status(200).json({
        //     data:allTasks,
        //     message: 'All Tasks are gotten successfully'
        // })
        res.render("index2", { allTasks: allTasks });
    }
    else {
        res.status(401).json({
            message: 'Tasks are Not Found'
        });
    }
};
exports.getAllTodos = getAllTodos;

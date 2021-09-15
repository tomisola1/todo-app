import express from 'express';
import { getAllTodos, getSingleTodo, createTodo, deleteTodo, updateTodo } from '../controller/todo'
const router = express.Router();


/* GET home page. */
router.get('/', getAllTodos) 

router.get('/:id', getSingleTodo) 

router.post('/create-todo', createTodo) 

router.post('/:id', updateTodo) 

router.get('/:id/delete', deleteTodo) 

export default router;

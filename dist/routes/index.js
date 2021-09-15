"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controller/todo");
const router = express_1.default.Router();
/* GET home page. */
router.get('/', todo_1.getAllTodos);
router.get('/:id', todo_1.getSingleTodo);
router.post('/create-todo', todo_1.createTodo);
router.post('/:id', todo_1.updateTodo);
router.get('/:id/delete', todo_1.deleteTodo);
exports.default = router;

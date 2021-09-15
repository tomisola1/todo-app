import mongoose from 'mongoose';

interface TodoInterface{
    title: string,
    createdAt: number
}
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
})

const todoModel = mongoose.model<TodoInterface>('Todo', todoSchema)
export { todoModel}
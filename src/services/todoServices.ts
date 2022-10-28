import Todo, { ITodo } from '../models/todo';

export const createTodo = async (todo : ITodo): Promise<ITodo>   => {
    const newTodo = new Todo(todo);
    return await newTodo.save();
};

export const readTodo = async (id:string)  => {
    return await Todo.findOne({ _id: id }).orFail();
};

export const updateTodo = async (id: string, todo: ITodo) => {
    return await Todo.findByIdAndUpdate(id, todo, {
        new: true,
        useFindAndModify: false
    }).orFail();
};

export const deleteTodo = async (id:string) => {
    return Todo.findByIdAndDelete(id).orFail();
};

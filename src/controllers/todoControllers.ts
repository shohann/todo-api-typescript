import { NextFunction, Request, Response } from 'express';
import { createTodo, readTodo, updateTodo, deleteTodo } from '../services/todoServices';

export const setTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todo = await createTodo(req.body);
        res.status(201).json({
            success: true,
            message: 'Todo created successfully',
            data: todo
        });
    } catch(error: any) {
        if (error.code === 11000) {
            return res.status(403).json({
                success: false,
                message: 'Todo already exists'
            });
        } else {
            next(error);
        }
    }

};

export const getTodo = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const id:string = req.params.id;
        const todo =  await readTodo(id);

        res.status(200).json({
            success: true,
            message: 'Todo found',
            data: todo
        });
    } catch(error: any) {
        if (error.name === 'DocumentNotFoundError') {
            return res.status(404).json({
                success: false,
                message: 'Not found'
            });
        } else {
            next(error);
        }
    }
};

export const modifyTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id:string = req.params.id;
        const oldTodo   = req.body;
        const newTodo = await  updateTodo(id, oldTodo);

        res.status(200).json({
            success: true,
            message: 'Contact updated',
            data: newTodo
        });
    } catch(error: any) {
        if (error.name === 'DocumentNotFoundError') {
            return res.status(404).json({
                success: false,
                message: 'Not found'
            });
        } else {
            next(error);
        }
    }
};

export const removeTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const todo = await deleteTodo(id);

        res.status(202).json({
            success: true,
            message: 'Contact deleted',
            data: todo
        });
    } catch(error: any) {
        if (error.name === 'DocumentNotFoundError') {
            return res.status(404).json({
                success: false,
                message: 'Not found'
            });
        } else {
            next(error);
        }
    }
}

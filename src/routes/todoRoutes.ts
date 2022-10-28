import express from 'express';
import { setTodo, getTodo, modifyTodo, removeTodo } from '../controllers/todoControllers';

const router = express.Router();

router
    .post('/', setTodo);
router
    .get('/:id', getTodo)
    .put('/:id', modifyTodo)
    .delete('/:id', removeTodo);

export default router;
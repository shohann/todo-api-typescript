"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.modifyTodo = exports.getTodo = exports.setTodo = void 0;
const todoServices_1 = require("../services/todoServices");
const setTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield (0, todoServices_1.createTodo)(req.body);
        res.status(201).json({
            success: true,
            message: 'Todo created successfully',
            data: todo
        });
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(403).json({
                success: false,
                message: 'Todo already exists'
            });
        }
        else {
            next(error);
        }
    }
});
exports.setTodo = setTodo;
const getTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const todo = yield (0, todoServices_1.readTodo)(id);
        res.status(200).json({
            success: true,
            message: 'Todo found',
            data: todo
        });
    }
    catch (error) {
        if (error.name === 'DocumentNotFoundError') {
            return res.status(404).json({
                success: false,
                message: 'Not found'
            });
        }
        else {
            next(error);
        }
    }
});
exports.getTodo = getTodo;
const modifyTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const oldTodo = req.body;
        const newTodo = yield (0, todoServices_1.updateTodo)(id, oldTodo);
        res.status(200).json({
            success: true,
            message: 'Contact updated',
            data: newTodo
        });
    }
    catch (error) {
        if (error.name === 'DocumentNotFoundError') {
            return res.status(404).json({
                success: false,
                message: 'Not found'
            });
        }
        else {
            next(error);
        }
    }
});
exports.modifyTodo = modifyTodo;
const removeTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const todo = yield (0, todoServices_1.deleteTodo)(id);
        res.status(202).json({
            success: true,
            message: 'Contact deleted',
            data: todo
        });
    }
    catch (error) {
        if (error.name === 'DocumentNotFoundError') {
            return res.status(404).json({
                success: false,
                message: 'Not found'
            });
        }
        else {
            next(error);
        }
    }
});
exports.removeTodo = removeTodo;

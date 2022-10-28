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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.readTodo = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const createTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = new todo_1.default(todo);
    return yield newTodo.save();
});
exports.createTodo = createTodo;
const readTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_1.default.findOne({ _id: id }).orFail();
});
exports.readTodo = readTodo;
const updateTodo = (id, todo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_1.default.findByIdAndUpdate(id, todo, {
        new: true,
        useFindAndModify: false
    }).orFail();
});
exports.updateTodo = updateTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return todo_1.default.findByIdAndDelete(id).orFail();
});
exports.deleteTodo = deleteTodo;

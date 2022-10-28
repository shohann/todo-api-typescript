"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoControllers_1 = require("../controllers/todoControllers");
const router = express_1.default.Router();
router
    .post('/', todoControllers_1.setTodo);
router
    .get('/:id', todoControllers_1.getTodo)
    .put('/:id', todoControllers_1.modifyTodo)
    .delete('/:id', todoControllers_1.removeTodo);
exports.default = router;

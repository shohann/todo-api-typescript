"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const todoSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    status: { type: Boolean, default: false },
});
// Create a Model.
exports.default = (0, mongoose_1.model)('Todo', todoSchema);

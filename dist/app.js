"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("./config/default"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const connectDB_1 = require("./utils/connectDB");
const port = default_1.default.port || 3001;
const app = (0, express_1.default)();
// Middleware
//  Body Parser
app.use(express_1.default.json({ limit: '10kb' }));
// Routes
app.use('/api/todos', todoRoutes_1.default);
// UnKnown Routes
app.all('*', (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
});
// Global Error Handler
app.use((err, req, res, next) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    (0, connectDB_1.connectDB)();
});

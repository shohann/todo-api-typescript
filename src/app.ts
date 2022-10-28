import express, { NextFunction, Request, Response } from 'express';
import defaultConfig  from './config/default';
import todoRouter from './routes/todoRoutes';
import { connectDB } from './utils/connectDB';

const port: number  = defaultConfig.port || 3001;
const app = express();

// Middleware

//  Body Parser
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/todos', todoRouter);

// UnKnown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    connectDB();
});


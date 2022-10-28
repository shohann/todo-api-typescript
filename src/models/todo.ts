import { Schema, model, Document } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface ITodo extends Document{
  title: string;
  status: boolean;
}

// 2. Create a Schema corresponding to the document interface.
const todoSchema = new Schema<ITodo>({
  title: { type: String, required: true, unique: true },
  status: { type: Boolean, default: false  },
});

// Create a Model.
export default model<ITodo>('Todo', todoSchema);



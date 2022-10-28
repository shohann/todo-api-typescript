import envVariables from '../config/custom-environment-variables';
import mongoose from 'mongoose';

const { dbServer } = envVariables;

export const connectDB = async () => {
  try {
    await mongoose.connect(`${dbServer}`);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
  }
};

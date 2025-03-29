import express from 'express';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
import messageRoute from '../routes/message.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/messages', messageRoute);

// Connect to DB and export for Vercel
connectDB();

// Export for Vercel serverless
export default app;
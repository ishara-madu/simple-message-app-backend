import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import messageRoute from './routes/message.route.js'
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors'
dotenv.config()

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://simple-message-app-backend.vercel.app/',
        methods: ['GET', 'POST'],
    },
});
app.use(cors());
app.use(express.json())
app.set('io', io);
const PORT = 5000;



app.use('/api/messages', messageRoute)


server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

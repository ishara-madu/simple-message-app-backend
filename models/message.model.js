import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Message', messageSchema);
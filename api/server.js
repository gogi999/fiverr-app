import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import authRouter from './routes/auth.route.js';
import conversationRouter from './routes/conversation.route.js';
import gigRouter from './routes/gig.route.js';
import messageRouter from './routes/message.route.js';
import orderRouter from './routes/order.route.js';
import reviewRouter from './routes/review.route.js';
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Successfully connected to MongoDB!');
    } catch (err) {
        console.error(err);
    }
}

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/gigs', gigRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/orders', orderRouter);
app.use('/api/conversations', conversationRouter);
app.use('/api/messages', messageRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';

    return res.status(errorStatus).send(errorMessage);
});

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}...`);
});

import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

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

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}...`);
});

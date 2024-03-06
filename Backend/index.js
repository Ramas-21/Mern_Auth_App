import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.route.js';
import authRoutes from './Routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION)
.then(() => {
    console.log('connected to the database');
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log('server has started');
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode, 
    })
})
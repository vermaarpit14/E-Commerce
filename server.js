import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import express from 'express';
import authRoutes from './routes/authRoute.js';

//configure .env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Listening to port on ${PORT}`.rainbow.bgWhite);
});

//rest api
app.get('/', (req, res) => {
    res.send('<body style="background-color: #09122C; color: #fff">E-Commerce Website</body>');
});
import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected to ${conn.connection.host}`.bgGreen.yellow);
    } catch (error) {
        console.log(`Error : ${error}`.bgRed.white);
    }
};

export default connectDB;

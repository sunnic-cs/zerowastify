import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async() => {
    try{
        mongoose.connect(MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on('connected', ()=> {
            console.log('Connected to DB!')
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection ERROR ' + err);
            process.exit();
        });
    } catch (error) {
        console.log("Something went wrong! " + error);
    }
}
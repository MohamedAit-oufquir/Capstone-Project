// db.js
import mongoose from 'mongoose';

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');
  } catch (err) {
    console.error('DB connection error:', err);
  }
}

export default connectdb;









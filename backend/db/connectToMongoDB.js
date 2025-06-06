import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(`ERROR CONNECTING TO MONGODB: ${error}`);
    }
};

export default connectToMongoDB;
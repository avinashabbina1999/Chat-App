import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb
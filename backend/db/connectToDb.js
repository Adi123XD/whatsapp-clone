import mongoose, { mongo } from "mongoose";
const connectToDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connect to MongoDb successfully")
        
    } catch (error) {
        console.log("Erorr in connecting to mongo db ", error.message)
        
    }
}
export default connectToDb;
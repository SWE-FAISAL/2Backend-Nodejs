import mongoose from "mongoose";

const dbConnection= async ()=>{
    const mongoDB = `mongodb+srv://faisaltyagi:user@cluster0.q1c4egd.mongodb.net/`;
    try {
       await mongoose.connect(mongoDB);
       console.log('database connect sucessfully');
    } catch (error) {
        console.log('erorr from database');
    }
}

export default dbConnection;
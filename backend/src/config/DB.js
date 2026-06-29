const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected.")
    } catch (error) {
        throw new Error(`DB ERROR: ${error.message}`)
    }
}

module.exports = connectDB
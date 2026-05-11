const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/react-login-tut");
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Error occured in db connection", err);
        process.exit(1);
    }
};

module.exports = connectDB;

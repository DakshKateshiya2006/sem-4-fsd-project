require("dotenv").config({quiet: true});
const server = require("./src/app");
const connectDB = require("./src/config/DB");
const port = process.env.PORT;
// Connect Mongodb when server start
connectDB();
server.listen(port,()=>console.log(`Server is Running on PORT: ${port}`));
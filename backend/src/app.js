const express = require("express");
const cookieParser = require("cookie-parser");
const Cors = require("cors");
const app = express();

// Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(Cors({
    origin: [process.env.DEV_FRONTEND_ORIGIN, process.env.PRODUCTION_FRONTEND_ORIGIN],
    secure: process.env.PRODUCT === "production",
    credentials: true
}))

// Health Route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// All Routes.


module.exports = app;
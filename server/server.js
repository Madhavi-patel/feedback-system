// const express =require('express');
// const app = express();
// const bodyparser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();
// require('./models/db'); // Ensure DB connection is established
// const PORT = process.env.PORT || 8080;

// app.get('/ping',(req,res)=>{
//   res.send('pong');
// });

// app.use(bodyparser.json());

// app.use(cors());

// app.use('/auth', require('./routes/authrouter'));
// app.use('/products', require('./routes/profilerouter'));

// app.listen(PORT,()=>{
//   console.log(`Server started on port ${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());          // Allow cross-origin requests
app.use(express.json());   // Parse JSON requests

// Routes
app.use("/api/auth", authRoutes);

// Start server and connect MongoDB
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.log(err));

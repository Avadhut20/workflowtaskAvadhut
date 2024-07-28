const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const { connectDb } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

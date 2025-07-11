const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const authRoute = require('./routes/authRoute');
const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://jenkins-learning.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRoute);
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Backend is running' });
});

module.exports = app;

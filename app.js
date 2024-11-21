const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const captchaRoutes = require('./routes/captchaRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/captcha', captchaRoutes);

module.exports = app;

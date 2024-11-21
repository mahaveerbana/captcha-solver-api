const express = require('express');
const { getCaptcha, validateCaptcha } = require('../controllers/captchaController');

const router = express.Router();

// Route to get a new CAPTCHA
router.get('/', getCaptcha);

// Route to validate the CAPTCHA
router.post('/validate', validateCaptcha);

module.exports = router;

const { generateCaptcha } = require('../utils/captchaGenerator');
const users = require('../models/userModel');

// Generate and return a new CAPTCHA
exports.getCaptcha = (req, res) => {
    const userId = req.query.userId || 'default';
    const captcha = generateCaptcha();

    if (!users[userId]) {
        users[userId] = { coins: 0, currentCaptcha: null };
    }
    users[userId].currentCaptcha = captcha;

    res.json({
        captcha: captcha.data,
        coins: users[userId].coins,
        userId,
    });
};

// Validate the CAPTCHA answer
exports.validateCaptcha = (req, res) => {
    const { userId, answer } = req.body;

    if (!users[userId]) {
        return res.status(400).json({ message: 'User not found' });
    }

    const { text } = users[userId].currentCaptcha;
    if (answer === text) {
        users[userId].coins += 1;
        return res.json({
            message: 'Correct!',
            coins: users[userId].coins,
        });
    } else {
        return res.status(400).json({ message: 'Incorrect captcha!' });
    }
};

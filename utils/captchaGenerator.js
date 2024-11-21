const svgCaptcha = require('svg-captcha');

// Generate a new CAPTCHA
exports.generateCaptcha = () => {
    const randomSize = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
    const options = {
        size: randomSize, 
        noise: 2,
        width: 250,
        height: 50,
        fontSize: 60,
    };
    return svgCaptcha.create(options);
};

const groqService = require('../services/groqService');

const generateEmailDraft = async (req, res, next) => {
    try {
        const { message, emailType, tone } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const emailDraft = await groqService.generateEmail(message, emailType, tone);

        res.status(200).json({ emailDraft });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    generateEmailDraft
};

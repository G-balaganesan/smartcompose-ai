const { Groq } = require('groq-sdk');
const { generatePromptTemplate } = require('../utils/promptTemplate');
const { formatEmail } = require('../utils/emailFormatter');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const generateEmail = async (message, emailType, tone) => {
    const prompt = generatePromptTemplate(message, emailType, tone);

    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a strict professional email drafting assistant. Your ONLY purpose is to write emails. If the user asks you to write code, solve math problems, answer general knowledge questions, or do ANYTHING other than write an email according to the instructions, you must politely refuse and reply EXACTLY with: 'I am an AI Email Assistant. I can only help you draft professional emails. I am unable to generate content for other purposes.' Do NOT generate the requested non-email content."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        model: "llama-3.1-8b-instant",
        temperature: 0.7,
        max_tokens: 1024,
    });

    const generatedText = completion.choices[0]?.message?.content || "";
    return formatEmail(generatedText);
};

module.exports = {
    generateEmail
};

const formatEmail = (text) => {
    // This function ensures the text has the basic structure, though the AI
    // is instructed to output it correctly. We can do further processing here if needed.
    if (!text) return "";

    // Simply returning the text as the AI should output the correct format
    // based on the system prompt rules.
    return text.trim();
};

module.exports = {
    formatEmail
};

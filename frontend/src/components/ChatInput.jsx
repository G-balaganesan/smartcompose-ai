import { useState } from 'react';
import EmailTypeSelector from './EmailTypeSelector';
import ToneSelector from './ToneSelector';

const ChatInput = ({ onSendMessage, isLoading }) => {
    const [input, setInput] = useState('');
    const [emailType, setEmailType] = useState('Professional Communication');
    const [tone, setTone] = useState('Professional');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSendMessage(input.trim(), emailType, tone);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="chat-input-wrapper">
            <div className="chat-controls">
                <EmailTypeSelector value={emailType} onChange={setEmailType} />
                <ToneSelector value={tone} onChange={setTone} />
            </div>

            <form className="chat-input-form" onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe the email you need generated..."
                    disabled={isLoading}
                    rows={2}
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="send-button"
                >
                    {isLoading ? (
                        <svg className="animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ChatInput;

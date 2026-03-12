import { useState, useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBubble from './MessageBubble';
import { generateEmail } from '../services/api';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (message, emailType, tone) => {
        // Add user message
        const userMsg = { id: Date.now(), role: 'user', content: message, emailType, tone };
        setMessages((prev) => [...prev, userMsg]);
        setIsLoading(true);

        try {
            // Fetch AI response
            const emailDraft = await generateEmail(message, emailType, tone);
            const aiMsg = { id: Date.now() + 1, role: 'ai', content: emailDraft };
            setMessages((prev) => [...prev, aiMsg]);
        } catch (error) {
            const errorMsg = { id: Date.now() + 1, role: 'ai', content: 'Sorry, I encountered an error generating your email. Please try again.', isError: true };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-box-container">
            <div className="messages-area">
                {messages.length === 0 ? (
                    <div className="empty-state">
                        <p>Welcome to AI Email Draft Assistant!</p>
                        <p className="subtitle">Describe the email you want to write, select the type and tone, and let AI do the rest.</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} />
                    ))
                )}
                {isLoading && (
                    <div className="message-bubble ai loading">
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default ChatBox;

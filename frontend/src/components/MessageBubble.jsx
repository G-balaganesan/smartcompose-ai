import EmailPreview from './EmailPreview';

const MessageBubble = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`message-wrapper ${isUser ? 'user-wrapper' : 'ai-wrapper'}`}>
            <div className={`message-avatar ${isUser ? 'user-avatar' : 'ai-avatar'}`}>
                {isUser ? 'U' : 'AI'}
            </div>

            <div className={`message-content ${isUser ? 'user-content' : 'ai-content'}`}>
                {isUser && (
                    <div className="message-meta">
                        <span className="meta-tag">{message.emailType}</span>
                        <span className="meta-tag tone-tag">{message.tone}</span>
                    </div>
                )}

                {isUser ? (
                    <p className="user-text">{message.content}</p>
                ) : message.isError ? (
                    <p className="error-text">{message.content}</p>
                ) : (
                    <EmailPreview content={message.content} />
                )}
            </div>
        </div>
    );
};

export default MessageBubble;

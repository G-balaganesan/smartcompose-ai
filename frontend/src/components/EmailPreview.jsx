import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';

const EmailPreview = ({ content }) => {
    if (!content) return null;

    return (
        <div className="email-preview">
            <div className="email-preview-header">
                <span className="email-preview-title">Generated Draft</span>
                <div className="email-preview-actions">
                    <CopyButton text={content} />
                    <DownloadButton text={content} />
                </div>
            </div>
            <div className="email-preview-body">
                {content.split('\n').map((line, index) => (
                    <p key={index} className="email-line">
                        {line || <br />}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default EmailPreview;

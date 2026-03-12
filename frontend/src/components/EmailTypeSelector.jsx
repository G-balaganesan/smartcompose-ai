const EmailTypeSelector = ({ value, onChange }) => {
    const options = [
        'Leave Request',
        'Internship Reply',
        'Meeting Request',
        'Job Application',
        'Apology Email',
        'Professional Communication'
    ];

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="custom-select"
        >
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    );
};

export default EmailTypeSelector;

const ToneSelector = ({ value, onChange }) => {
    const options = [
        'Formal',
        'Friendly',
        'Professional',
        'Polite',
        'Direct',
        'Persuasive'
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

export default ToneSelector;

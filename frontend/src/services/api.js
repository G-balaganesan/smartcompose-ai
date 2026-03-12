import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // ensure backend runs here
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generateEmail = async (message, emailType, tone) => {
    try {
        const response = await api.post('/chat', { message, emailType, tone });
        return response.data.emailDraft;
    } catch (error) {
        console.error('API Error:', error);
        throw new Error(error.response?.data?.error || 'Failed to generate email');
    }
};

export default api;

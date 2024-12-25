import axios from 'axios';

const API_BASE_URL = 'https://fecin-2025.vercel.app/';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example: Fetch events
export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Example: Submit prayer request
export const submitPrayerRequest = async (data) => {
  try {
    const response = await api.post('/prayer-requests', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting prayer request:', error);
    throw error;
  }
};

export default api;

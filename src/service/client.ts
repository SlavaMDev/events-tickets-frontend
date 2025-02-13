import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9001',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the token in each request
axiosClient.interceptors.request.use(
  (config) => {
    const user = sessionStorage.getItem('user');
    if (user) {
      const data = JSON.parse(user);
      config.headers['Authorization'] = `Bearer ${data.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;

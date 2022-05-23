import axios from 'axios';
const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set(
  'bookstore-maven-client.herokuapp.com',
  'https://book-store-maven.herokuapp.com/'
);

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('bookstore-token');
    if (token != null) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default environmentUrls.get(window.location.hostname);

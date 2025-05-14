
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://0.0.0.0:2025';

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;

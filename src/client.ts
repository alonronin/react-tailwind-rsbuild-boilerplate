import axios from 'axios';

const baseURL = import.meta.env.PUBLIC_BASE_URL;

export default axios.create({ baseURL });

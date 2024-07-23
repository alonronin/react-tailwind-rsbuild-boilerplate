import axios from 'axios';

const baseURL = `${process.env.PUBLIC_BASE_URL}`;

export default axios.create({ baseURL });

import axios from 'axios';

const baseURL = `${process.env.BASE_URL}`;

export default axios.create({ baseURL });

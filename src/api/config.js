import axios from 'axios';

const http = axios.create({baseURL: 'http://localhost:8088'});

export default http;



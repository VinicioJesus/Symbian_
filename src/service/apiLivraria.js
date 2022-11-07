import axios from 'axios';

const symbian_api = axios.create({
    baseURL: 'http://10.107.144.16:3000'
});

export default symbian_api;
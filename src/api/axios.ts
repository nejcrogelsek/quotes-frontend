import axios from 'axios'
import { QuoteData } from '../interfaces/quote.interface';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
});

export default instance;
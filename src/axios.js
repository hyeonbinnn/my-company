import axios from 'axios';

export const postInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

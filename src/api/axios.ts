import axios from 'axios';

const appAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  headers: {
    accept: 'app;ication/json',
  },
});

export default appAxios;
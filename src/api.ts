import axios from "axios";

const http = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const api = {
  getAllmovies: async () => {
    let response = await http.get('/films/1/');
    return response.data;
  }
}
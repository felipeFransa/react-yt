import axios from "axios";

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const api = {
  getAllPhotos: async () => {
    let response = await http.get('/photos');
    return response.data;
  }
}
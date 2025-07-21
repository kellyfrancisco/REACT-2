import axios from "axios";
import { languages } from "eslint-plugin-prettier";

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
  params: {
    api_key: '31e80776b1b64d0a498e03c96c41a0c3',
    language: 'pt-BR',
    page: 1,
  }
})


export default api
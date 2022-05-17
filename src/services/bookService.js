import axios from 'axios';
import baseUrl from '../config';

const getBooksService = () =>
  axios.get(`${baseUrl}/api/v1/books`).then((response) => response.data);

export default getBooksService;

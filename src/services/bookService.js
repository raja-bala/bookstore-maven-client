import axios from 'axios';
import baseUrl from '../config';

export const getBooksService = () =>
  axios.get(`${baseUrl}/api/v1/books`).then((response) => response.data);

export const getBooksByTitleService = (title) =>
  axios
    .get(`${baseUrl}/api/v1/books/${title}`)
    .then((response) => response.data);

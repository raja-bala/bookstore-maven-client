import axios from 'axios';
import baseUrl from '../config';

export const loginService = (email, password) =>
  axios
    .post(`${baseUrl}/api/v1/login`, { email, password })
    .then((response) => response.data);;

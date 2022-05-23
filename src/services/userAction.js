import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginService } from './userService';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    const res = await loginService(email, password);
    window.localStorage.setItem('bookstore-token', res.token);
    return res.token;
  }
);

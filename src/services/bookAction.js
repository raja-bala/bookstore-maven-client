import { createAsyncThunk } from '@reduxjs/toolkit';
import getBooksService from './bookService';

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  const res = await getBooksService();
  return res;
});

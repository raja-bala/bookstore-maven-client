import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooksService, getBooksByTitleService } from './bookService';

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  const res = await getBooksService();
  return res;
});
export const getBooksByTitle = createAsyncThunk(
  'books/getBooksByTitle',
  async (title, thunkAPI) => {
    const res = await getBooksByTitleService(title);
    return res;
  }
);

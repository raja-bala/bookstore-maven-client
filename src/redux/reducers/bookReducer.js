import { createSlice } from '@reduxjs/toolkit';
import { getBooks, getBooksByTitle } from '../../services/bookAction';

export const initialState = {
  books: [],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = 'pending';
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.loading = 'succeeded';
      state.books = payload;
    },
    [getBooks.rejected]: (state) => {
      state.loading = 'failed';
      state.books = [];
    },
    [getBooksByTitle.pending]: (state) => {
      state.loading = 'pending';
    },
    [getBooksByTitle.fulfilled]: (state, { payload }) => {
      state.loading = 'succeeded';
      state.books = payload;
    },
    [getBooksByTitle.rejected]: (state) => {
      state.loading = 'failed';
      state.books = [];
    },
  },
});

export default booksSlice.reducer;

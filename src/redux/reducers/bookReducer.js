import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from '../../services/bookAction';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  },
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
    },
  },
});

export default booksSlice.reducer;

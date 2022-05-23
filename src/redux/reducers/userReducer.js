import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../services/userAction';

export const initialState = {
  token: '',
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = 'pending';
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = 'succeeded';
      state.token = payload;
    },
    [login.rejected]: (state) => {
      state.loading = 'failed';
      state.token = '';
    },
  },
});

export default userSlice.reducer;

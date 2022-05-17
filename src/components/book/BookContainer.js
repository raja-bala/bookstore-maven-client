import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../services/bookAction';
import { BookFilter } from './BookFilter';
import BookList from './BookList';
import Skeleton from '@mui/material/Skeleton';

export const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const loading = useSelector((state) => state.booksReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <BookFilter></BookFilter>

      <Box
        sx={{
          width: '80%',
        }}
      >
        {loading === 'pending' && (
          <Skeleton
            animation='pulse'
            variant='circular'
            width={100}
            height={100}
          />
        )}
        {loading === 'succeeded' && <BookList books={books} />}
      </Box>
    </Box>
  );
};

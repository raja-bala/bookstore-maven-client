import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getBooksByTitle } from '../../services/bookAction';

export const BookFilter = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  return (
    <Box
      sx={{
        width: '20%',
        height: '500px',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <Typography>Search a Book</Typography>
        <Box paddingTop={3} marginBottom={2}>
          <TextField
            id='book-search'
            label='Enter a book title'
            variant='outlined'
            placeholder='Enter a book title'
            data-testid='book-title-input'
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Box>
        <Button
          variant='contained'
          color='primary'
          data-testid='book-search-button'
          onClick={() => {
            console.log('hi');
            dispatch(getBooksByTitle(searchText));
          }}
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};

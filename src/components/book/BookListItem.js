import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
function BookListItem({ book }) {
  return (
    <Box mb={2}>
      <Paper
        elevation={2}
        sx={{ padding: '10px', display: 'flex', width: '80%' }}
      >
        <Avatar variant='square' sx={{ width: '180px', height: '200px' }}>
          {book.title}
        </Avatar>
        <Box ml={2}>
          <Typography variant='h5'>{book.title}</Typography>
          <Typography>{book.description}</Typography>
          <Typography>{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

BookListItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }),
};

export default BookListItem;

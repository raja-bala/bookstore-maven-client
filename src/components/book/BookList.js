import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BookListItem from './BookListItem';
const BookList = ({ books }) => {
  return (
    <Box ml={5}>
      {books.map((book) => (
        <BookListItem key={book.id} book={book}></BookListItem>
      ))}
    </Box>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BookList;

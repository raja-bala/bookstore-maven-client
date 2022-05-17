import reducer from '../bookReducer';
import { initialState } from '../bookReducer';
test('should return the initial statue', () => {
  expect(reducer(undefined, {})).toEqual({
    books: [],
    loading: 0,
  });
});

test('getBooks succeeded', () => {
  expect(
    reducer(initialState, {
      type: 'books/getBooks/fulfilled',
      payload: [
        {
          id: 1,
          title: 'test title',
          description: 'des',
          releaseYear: 2018,
        },
      ],
    })
  ).toEqual({
    books: [
      {
        id: 1,
        title: 'test title',
        description: 'des',
        releaseYear: 2018,
      },
    ],
    loading: 'succeeded',
  });
});
test('getBooks failed', () => {
  expect(
    reducer(initialState, {
      type: 'books/getBooks/rejected',
      payload: [],
    })
  ).toEqual({
    books: [],
    loading: 'failed',
  });
});
test('getBooks pending', () => {
  expect(
    reducer(initialState, {
      type: 'books/getBooks/pending',
      payload: [],
    })
  ).toEqual({
    books: [],
    loading: 'pending',
  });
});
test('getBooksByTitle succeeded', () => {
  expect(
    reducer(initialState, {
      type: 'books/getBooksByTitle/fulfilled',
      payload: [
        {
          id: 1,
          title: 'test title',
          description: 'des',
          releaseYear: 2018,
        },
      ],
    })
  ).toEqual({
    books: [
      {
        id: 1,
        title: 'test title',
        description: 'des',
        releaseYear: 2018,
      },
    ],
    loading: 'succeeded',
  });
});
test('getBooksByTitle failed', () => {
  expect(
    reducer(initialState, {
      type: 'books/getBooksByTitle/rejected',
      payload: [],
    })
  ).toEqual({
    books: [],
    loading: 'failed',
  });
});
test('getBooksByTitle pending', () => {
  expect(
    reducer(initialState, {
      type: 'books/getBooksByTitle/pending',
      payload: [],
    })
  ).toEqual({
    books: [],
    loading: 'pending',
  });
});
import reducer from '../bookReducer';

test('should return the initial statue', () => {
  expect(reducer(undefined, {})).toEqual({
    books: [],
    loading: 0,
  });
});

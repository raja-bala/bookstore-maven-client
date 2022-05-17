import axios from 'axios';
import { getTestStore } from '../../redux/__test__/storeTest';
import { getBooks, getBooksByTitle } from '../bookAction';
import baseUrl from '../../config';
jest.mock('axios');
describe('Book Actions - success scenario', () => {
  let store = null;
  const books = {
    data: [
      {
        id: 1,
        title: 'test title',
        description: 'des',
        releaseYear: 2018,
      },
    ],
  };

  beforeEach(() => {
    store = getTestStore();
    // axios.get.mockImplementation(() =>
    //   Promise.resolve({
    //     data: [
    //       {
    //         id: 1,
    //         title: 'test title',
    //         description: 'des',
    //         releaseYear: 2018,
    //       },
    //     ],
    //   })
    // );
    axios.get.mockResolvedValue(books);
  });

  it('should able to dispatch success action', async () => {
    await store.dispatch(getBooks());

    const result = store.getState().booksReducer.books;
    expect(result).toEqual(books.data);
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/api/v1/books`);
  });
  it('should able to dispatch bookbytitle action', async () => {
    const title = 'test title';
    await store.dispatch(getBooksByTitle(title));

    const result = store.getState().booksReducer.books;
    expect(result).toEqual(books.data);
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/api/v1/books/${title}`);
  });
});
describe('Book Actions - failed scenario', () => {
  let store = null;

  beforeEach(() => {
    store = getTestStore();

    // const mockError = { message: 'Smth Bad Happened' };
    // axios.get.mockImplementation(() => Promise.reject(mockError));
    const message = 'Network Error';
    axios.get.mockRejectedValueOnce(new Error(message));
  });

  it('should able to dispatch failed action', async () => {
    await store.dispatch(getBooks());

    const result = store.getState().booksReducer.loading;
    expect(result).toEqual('failed');
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/api/v1/books`);
  });
  it('should able to dispatch bookbytitle failed action', async () => {
    const title = 'test title';
    await store.dispatch(getBooksByTitle(title));

    const result = store.getState().booksReducer.loading;
    expect(result).toEqual('failed');
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/api/v1/books/${title}`);
  });
});

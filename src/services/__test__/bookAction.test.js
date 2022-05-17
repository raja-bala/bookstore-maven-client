import axios from 'axios';
import { getTestStore } from '../../redux/__test__/storeTest';
import { getBooks } from '../bookAction';

jest.mock('axios');
describe('Book Actions', () => {
  let store = null;
  beforeEach(() => {
    store = getTestStore();
  });

  it('should able to dispatch success action', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: 'test title',
            description: 'des',
            releaseYear: 2018,
          },
        ],
      })
    );

    await store.dispatch(getBooks());

    const books = store.getState().booksReducer.books;
    expect(books).toEqual([
      {
        id: 1,
        title: 'test title',
        description: 'des',
        releaseYear: 2018,
      },
    ]);
  });
});

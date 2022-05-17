import renderWithRedux from '../../../redux/__test__/storeTest';
import { BookContainer } from '../BookContainer';
import BookList from '../BookList';

jest.mock('../BookList');
describe('<BookContainer>', () => {
  beforeAll(() => {
    BookList.mockImplementation(() => <div>Sample Text</div>);
  });
  it('should render without error', () => {
    const booksReducer = {
      books: [
        {
          id: 1,
          title: 'test title',
          description: 'des',
          releaseYear: 2018,
        },
      ],
      loading: 'succeeded',
    };

    renderWithRedux(<BookContainer></BookContainer>, {
      preloadedState: {
        booksReducer,
      },
    });
    const books = booksReducer.books;
    expect(BookList).toHaveBeenCalledWith({ books }, {});
  });
});

import { render } from '@testing-library/react';
import BookList from '../BookList';
import BookListItem from '../BookListItem';

jest.mock('../BookListItem');

describe('<BookList>', () => {
  beforeAll(() => {
    BookListItem.mockImplementation(() => <div>booklistitme mock comp</div>);
  });
  const books = [
    {
      id: 1,
      title: 'test title',
      description: 'des',
      releaseYear: 2018,
    },
    {
      id: 2,
      title: 'test title 2',
      description: 'des 2',
      releaseYear: 2022,
    },
  ];
  it('render bookList without error', () => {
    render(<BookList books={books} />);

    expect(BookListItem).toHaveBeenCalledTimes(2);
    expect(BookListItem).toHaveBeenCalledWith({ book: books[0] }, {});
    expect(BookListItem).toHaveBeenCalledWith({ book: books[1] }, {});
  });
});

import { render, screen } from '@testing-library/react';
import BookListItem from '../BookListItem';

describe('<BookListItem>', () => {
  it('should render BookListItem without error', () => {
    const book = {
      id: 1,
      title: 'test title',
      description: 'des',
      releaseYear: 2018,
    };
    render(<BookListItem book={book} />);
    //becos title will be in two places, in avatar and title section
    //getByText will be looking for only one entry of the expected input and will fail if multiple entries found
    //that is why we are using getAllByText with index 0
    expect(screen.getAllByText('test title')[0]).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('des')).toBeInTheDocument();
  });
});

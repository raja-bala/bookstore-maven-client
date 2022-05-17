import { screen } from '@testing-library/react';
import renderWithRedux from '../../redux/__test__/storeTest';
import App from '../App';

describe('<App/>', () => {
  test('renders learn react link', () => {
    renderWithRedux(<App />);
    const linkElement = screen.getByText(/Book Store/i);
    expect(linkElement).toBeInTheDocument();
  });
});

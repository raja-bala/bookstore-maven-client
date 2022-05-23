import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import * as reactRedux from 'react-redux';

import { BookFilter } from '../BookFilter';

import { getBooksByTitle } from '../../../services/bookAction';

jest.mock('../../../services/bookAction');
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('<BookFilter>', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector({}));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  it('should file getBookByTitle action on click of search button', () => {
    render(<BookFilter></BookFilter>);
    const textField = screen
      .getByTestId('book-title-input')
      .querySelector('input');
    expect(textField).toBeInTheDocument();
    fireEvent.change(textField, { target: { value: 'test title' } });
    const searchButton = screen.getByTestId('book-search-button');
    fireEvent.click(searchButton);
    expect(textField.value).toBe('test title');

    expect(getBooksByTitle).toHaveBeenCalledTimes(1);
    expect(getBooksByTitle).toHaveBeenLastCalledWith('test title');
  });
});

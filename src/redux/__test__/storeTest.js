import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import commonReducer from '../reducers/commonReducer';

export const getTestStore = (initialState = {}) => {
  const store = configureStore({
    reducer: commonReducer,
    preloadedState: initialState,
  });
  return store;
};
const renderWithRedux = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: commonReducer,
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
export default renderWithRedux;

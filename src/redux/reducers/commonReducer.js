import bookReducer from './bookReducer';
import userReducer from './userReducer';

const commonReducer = {
  booksReducer: bookReducer,
  userReducer,
};
export default commonReducer;

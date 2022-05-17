import { configureStore } from '@reduxjs/toolkit';

import commonReducer from './reducers/commonReducer';

export default configureStore({
  reducer: commonReducer
});

import axios from 'axios';
import baseUrl from '../../config';
import { login } from '../userAction';

import { getTestStore } from '../../redux/__test__/storeTest';
jest.mock('axios');
describe('User Action - success scenario', () => {
  let store = null;

  beforeEach(() => {
    store = getTestStore();

    axios.post.mockResolvedValue({
      data: {
        token: 'jwt token',
      },
    });
  });
  it('should be able to dispatch success action', async () => {
    const credentials = {
      email: 'peter@gmail.com',
      password: 'password',
    };
    await store.dispatch(login(credentials));
    expect(axios.post).toHaveBeenCalledWith(
      `${baseUrl}/api/v1/login`,
      credentials
    );
  });
});

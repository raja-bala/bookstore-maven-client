import reducer from '../userReducer';
import { initialState } from '../userReducer';
describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('login succeeded', () => {
    expect(
      reducer(initialState, {
        type: 'user/login/fulfilled',
        payload: 'jwt token',
      })
    ).toEqual({
      token: 'jwt token',
      loading: 'succeeded',
    });
  });
  it('login failed', () => {
    expect(
      reducer(initialState, {
        type: 'user/login/rejected',
      })
    ).toEqual({
      token: '',
      loading: 'failed',
    });
  });
  it('login pending', () => {
    expect(
      reducer(initialState, {
        type: 'user/login/pending',
      })
    ).toEqual({
      token: '',
      loading: 'pending',
    });
  });
});

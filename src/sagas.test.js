import { put } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import { updateUser } from './actions';
import { LOGIN } from './routes';
import { ensureUser, loginUser, logoutUser } from './sagas';

describe('User Logout', () => {
  it('Successfully logs out a user by removing local storage hash and clearing state', () => {
    window.localStorage.removeItem = jest.fn();
    const gen = logoutUser();
    expect(gen.next().value).toEqual(
      put(updateUser({ results: {}, info: {} }))
    );
    expect(gen.next().value).toEqual(put(push(`/${LOGIN}`)));
    expect(gen.next().done).toEqual(true);
  });
});

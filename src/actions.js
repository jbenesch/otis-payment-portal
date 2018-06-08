import { createAction } from 'redux-act';

export const login = createAction('USER_LOGIN', x => String(x));
export const logout = createAction('USER_LOGOUT');
export const updateUser = createAction('USER_UPDATE', ({ results, info }) => ({
  results,
  info
}));
export const handleError = createAction('HANDLE_ERROR', msg => msg);

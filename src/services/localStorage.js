import md5 from 'md5';

const NAMESPACE = process.env.REACT_APP_LOCAL_STORAGE_NAMESPACE || 'OTIS';
const SALT = process.env.REACT_APP_SALT || 'uw@GqS3GG^*2';

export const getSessionHash = () => window.localStorage.getItem(NAMESPACE);

export const setSessionHash = token => {
  const hash = md5(token + SALT);
  window.localStorage.setItem(NAMESPACE, hash);
  return hash;
};

export const removeSessionHash = () =>
  window.localStorage.removeItem(NAMESPACE);

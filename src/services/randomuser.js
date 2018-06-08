const API_URL =
  process.env.REACT_APP_USER_SERVICE_HOST || 'https://randomuser.me/api/';

export const fetchUser = async (seed = null) =>
  await window
    .fetch(`${API_URL}${seed ? `?seed=${seed}` : ''}`)
    .then(res => res.json());

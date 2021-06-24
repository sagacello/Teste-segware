const saveToken = (token) =>
  localStorage.setItem('token', JSON.stringify(token));

const getToken = () => JSON.parse(localStorage.getItem('token'));

const saveUsername = (username) =>
  localStorage.setItem('username', JSON.stringify(username));

const getUsername = () => JSON.parse(localStorage.getItem('username'));

export { getToken, saveToken, saveUsername, getUsername };

import axios from 'axios';

export default async function fetchForgotPassword(username) {
  const requestUsername = `https://segware-book-api.segware.io/api/forgot-password/${username}`;
  const requestHeader = {
    'Content-Type': 'application/json',
  };
  
  try {
    const res = await axios.get(requestUsername, requestHeader);
    const { data } = res;
    if (data) {
      return data.password;
    }
  } catch (error) {
    console.error(error);
  }
}

import axios from 'axios';

export default async function fetchSignUp(username, password) {
  const requestUserUrl = 'https://segware-book-api.segware.io/api/sign-up';

  const requestHeader = {
    'Content-Type': 'application/json',
  };

  const requestBody = {
    username,
    password,
  };
  try {
    const res = await axios.post(requestUserUrl, requestBody, requestHeader);
    const { data } = res;
    if (data) {
      return data;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

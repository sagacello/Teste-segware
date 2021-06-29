import axios from 'axios';
import { saveToken } from '../helpers/localStorage';

export default async function fetchSignIn(username, password) {
  const requestUserUrl = 'https://segware-book-api.segware.io/api/sign-in';

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
      saveToken(data);
      return data;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

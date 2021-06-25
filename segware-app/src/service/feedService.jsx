import axios from 'axios';
import { getToken } from '../helpers/localStorage';

export default async function fetchFeed(content) {
  const requestUserUrl = 'https://segware-book-api.segware.io/api/feed';
  const token = getToken();

  const requestHeader = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  const requestBody = {
    content,
  };
  try {
    const res = await axios.post(requestUserUrl, requestBody, {
      headers: requestHeader,
    });
    const { data } = res;
    if (data) {
      return data;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

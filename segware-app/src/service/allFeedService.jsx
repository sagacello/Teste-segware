import axios from 'axios';
import { getToken } from '../helpers/localStorage';

export default async function fetchAllFeed() {
  const requestUserUrl = 'https://segware-book-api.segware.io/api/feeds';
  const token = getToken();

  const requestHeader = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  try {
    const res = await axios.get(requestUserUrl, {
      headers: requestHeader,
    });
    const { data } = res;
    if (data) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
}

import axios from 'axios';
import { getToken } from '../helpers/localStorage';

export default async function fetchReactions(feedId, like, love) {
  const requestUserUrl = 'https://segware-book-api.segware.io/api/reaction';
  const token = getToken();

  const requestHeader = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  const requestBody = {
    feedId,
    like,
    love,
  };
  try {
    const res = await axios.post(requestUserUrl, requestBody, {
      headers: requestHeader,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

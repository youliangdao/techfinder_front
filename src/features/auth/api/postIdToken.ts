import axios from 'axios';
import { endpoint } from 'config';

export const postIdToken = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  const res = await axios.post(`${endpoint}/authentication`, null, config);
  if (res.status !== 200) {
    throw new Error('login error');
  }
};

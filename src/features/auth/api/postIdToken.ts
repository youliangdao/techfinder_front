import axios from 'axios';
import { endpoint } from 'config';

export const postIdToken = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  await axios.post(`${endpoint}/authentication`, null, config);
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      throw new Error('login error');
    }
  );
};

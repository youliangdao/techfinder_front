import axios from 'axios';
import { endpoint } from 'config';

export const showProfile = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  try {
    const res = await axios.get(`${endpoint}/profile`, config);
    return res.data;
  } catch (error) {
    throw new Error();
  }
};

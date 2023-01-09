import axios from 'axios';
import { endpoint } from 'config';

export const deleteLike = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  id: string
) => {
  try {
    await axios.delete(`${endpoint}/likes/${id}`, config);
  } catch (error) {
    throw new Error('like delete error');
  }
};

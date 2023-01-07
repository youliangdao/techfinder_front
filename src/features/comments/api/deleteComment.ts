import axios from 'axios';
import { endpoint } from 'config';

export const deleteComment = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  id: string
) => {
  try {
    axios.delete(`${endpoint}/comments/${id}`, config);
  } catch (error) {
    throw new Error('comment delete error');
  }
};

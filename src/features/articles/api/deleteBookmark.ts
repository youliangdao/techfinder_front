import axios from 'axios';
import { endpoint } from 'config';

export const deleteBookmark = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  id: string
) => {
  try {
    await axios.delete(`${endpoint}/bookmarks/${id}`, config);
  } catch (error) {
    throw new Error('bookmark delete error');
  }
};

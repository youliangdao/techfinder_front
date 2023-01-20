import { LikeCounts } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const getLikeCounts = async (id: string) => {
  try {
    const res = await axios.get<LikeCounts>(`${endpoint}/articles/${id}/likes`);
    return res.data.count;
  } catch (error) {
    throw new Error('like counts get error');
  }
};

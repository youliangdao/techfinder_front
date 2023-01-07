import { LikeCounts } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const getLikeCounts = async (id: string) => {
  try {
    const res = await axios.get<LikeCounts>(
      `${endpoint}/articles/${id}/qiita_article_likes`
    );
    return res.data;
  } catch (error) {
    throw new Error('like counts get error');
  }
};

import axios from 'axios';
import { endpoint } from 'config';

export const postLikes = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  id: string
) => {
  try {
    await axios.post(
      `${endpoint}/qiita_article_likes`,
      {
        qiita_article_id: id,
      },
      config
    );
  } catch (error) {
    throw new Error('like post error');
  }
};

import axios from 'axios';
import { endpoint } from 'config';

export const postBookmarks = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  id: string
) => {
  try {
    await axios.post(
      `${endpoint}/bookmarks`,
      {
        qiita_article_id: id,
      },
      config
    );
  } catch (error) {
    throw new Error('bookmark post error');
  }
};

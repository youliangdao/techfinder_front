import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const getBookmarks = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  try {
    const res = await axios.get<ResponseArticleType>(
      `${endpoint}/articles/bookmarks`,
      config
    );
    return res.data;
  } catch (error) {
    throw new Error('bookmark get error');
  }
};

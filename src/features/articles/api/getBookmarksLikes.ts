import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const getBookmarksLikes = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  try {
    const res = await axios.get<ResponseArticleType>(
      `${endpoint}/articles/bookmarks_and_likes`,
      config
    );
    return res.data;
  } catch (error) {
    throw new Error('bookmark and like get error');
  }
};

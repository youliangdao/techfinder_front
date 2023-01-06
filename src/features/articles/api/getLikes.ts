import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const getLikes = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  try {
    const res = await axios.get<ResponseArticleType>(
      `${endpoint}/articles/likes`,
      config
    );
    return res.data;
  } catch (error) {
    throw new Error('bookmark get error');
  }
};

import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const fetchTrendArticles = async () => {
  const res = await axios.get<ResponseArticleType>(
    `${endpoint}/articles/rising`
  );
  return res.data;
};

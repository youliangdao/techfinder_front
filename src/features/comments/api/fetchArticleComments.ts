import axios from 'axios';
import { ResponseCommentType } from 'comments/types';
import { endpoint } from 'config';

export const fetchArticleComments = async (articleId: string) => {
  const res = await axios.get<ResponseCommentType>(
    `${endpoint}/articles/${articleId}/comments`
  );
  return res.data;
};

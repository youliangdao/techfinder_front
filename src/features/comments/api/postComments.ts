import axios from 'axios';
import { ResponsePostCommentType } from 'comments/types';
import { endpoint } from 'config';

export const postComments = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  body: string,
  articleId: string
) => {
  try {
    const res = await axios.post<ResponsePostCommentType>(
      `${endpoint}/articles/${articleId}/comments`,
      {
        body: body,
      },
      config
    );
    return res.data.data;
  } catch (error) {
    throw new Error('comment post error');
  }
};

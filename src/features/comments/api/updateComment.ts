import axios from 'axios';
import { ResponsePostCommentType } from 'comments/types';
import { endpoint } from 'config';

export const updateComment = async (
  config: {
    headers: {
      authorization: string;
    };
  },
  id: string,
  body: string
) => {
  try {
    const res = await axios.patch<ResponsePostCommentType>(
      `${endpoint}/comments/${id}`,
      {
        body: body,
      },
      config
    );
    return res.data;
  } catch (error) {
    throw new Error('comment delete error');
  }
};

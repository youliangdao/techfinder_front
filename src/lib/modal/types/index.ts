import { Comment } from 'comments/types';
import { Dispatch, SetStateAction } from 'react';

export type ArticleCommentsProps = {
  articleId: string;
  commentLists: Comment[];
  setCommentLists: Dispatch<SetStateAction<Comment[]>>;
};

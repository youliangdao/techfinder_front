import CommentLists from 'comments/components/CommentLists';
import React from 'react';

import { ArticleCommentsProps } from './types';

const ArticleComments = ({
  articleId,
  commentLists,
  setCommentLists,
}: ArticleCommentsProps) => {
  return <CommentLists {...{ commentLists, articleId, setCommentLists }} />;
};

export default ArticleComments;

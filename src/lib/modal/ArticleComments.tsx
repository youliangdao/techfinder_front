import CommentLists from 'comments/components/CommentLists';
import React from 'react';

import { ArticleCommentsProps } from './types';

const ArticleComments = ({
  article,
  commentLists,
  close,
}: ArticleCommentsProps) => {
  return <CommentLists {...{ commentLists, article, close }} />;
};

export default ArticleComments;

import CommentLists from 'comments/components/CommentLists';
import React from 'react';

import { ArticleCommentsProps } from './types';

const ArticleComments = ({ article, commentLists }: ArticleCommentsProps) => {
  return <CommentLists {...{ commentLists, article }} />;
};

export default ArticleComments;

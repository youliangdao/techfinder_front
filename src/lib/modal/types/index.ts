import { Article } from 'articles/types';
import { Comment } from 'comments/types';

export type ArticleCommentsProps = {
  article: Article;
  close: () => void;
  commentLists: Comment[];
};
